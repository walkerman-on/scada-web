import React, { useEffect, useRef } from 'react';
import * as go from 'gojs';

export const ScadaApp: React.FC = () => {
    const diagramRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!diagramRef.current) return;

        const $ = go.GraphObject.make;

        // Define colors
        const colors = {
            black: '#151c26',
            white: '#ffffff',
            gray: '#2c323b',
            green: '#7ba961',
            blue: '#00a9b0',
            pink: '#e483a2',
            yellow: '#f9c66a',
            orange: '#e48042',
            red: '#ed2d44',
        };

        // Define custom geometries
        const tank1 = 'F M 0 0 L 0 75 25 100 50 75 50 0z'; // 50x100 sized-shape
        const tank2 = 'F M 0 0 L 0 100 10 100 10 90 40 90 40 100 50 100 50 0z'; // 50x100 sized-shape
        const tank3 = 'F M 0 100 L 0 25 A 25 25 0 0 1 50 25 L 50 100 z'; // 50x100 sized-shape
        const labelLeft = 'F M 0 20 L 30 40 100 40 100 0 30 0 z';
        const labelRight = 'F M 0 0 L 70 0 100 20 70 40 0 40 z';

        const valve = 'F1 M0 0 L40 20 40 0 0 20z M20 10 L20 30 M12 30 L28 30';
        const pump = 'F M 8 10 A 2 2 0 1 1 6 8 L 9 8 L 9 10 Z M 5 11 A 1 1 0 0 1 7 9';
        const sensor = 'F M 0 0 L 15 15 L 15 20 L 5 20 L 5 15 L 0 15 L 0 10 L -2 10 L -2 4 L 0 4 Z';

        // Text defaults
        const textDefaults = {
            font: '10px InterVariable, sans-serif',
            stroke: colors.white
        };

        // Create the diagram
        const myDiagram = $(go.Diagram, diagramRef.current, {
            'animationManager.isEnabled': false,
            'undoManager.isEnabled': true,
            'rotatingTool.snapAngleMultiple': 90,
            'rotatingTool.snapAngleEpsilon': 45,
        });

        // Tank port template
        const tankPort = $(go.Panel)
            .bind('alignment', 'a')
            .bind('portId', 'p')
            .bind('fromSpot', 'fs')
            .bind('toSpot', 'ts')
            .add($(go.Shape, 'Diamond', { width: 10, height: 10, fill: colors.white }));

        // Base template for tanks
        myDiagram.nodeTemplateMap.add('',
            $(go.Node, 'Spot', {
                itemTemplate: tankPort,
            })
                .bindTwoWay('location', 'pos', go.Point.parse, go.Point.stringify)
                .bind('itemArray', 'ports')
                .add(
                    $(go.Panel, 'Spot').add(
                        $(go.Shape, {
                            geometryString: tank3,
                            strokeWidth: 1,
                            stroke: 'gray',
                            width: 75,
                            height: 140,
                            fill: $(go.Brush, 'Linear', {
                                0: go.Brush.darken(colors.white),
                                0.2: colors.white,
                                0.33: go.Brush.lighten(colors.white),
                                0.5: colors.white,
                                1: go.Brush.darken(colors.white),
                                start: go.Spot.Left,
                                end: go.Spot.Right,
                            }),
                        })
                            .bind('width')
                            .bind('height')
                            .bind('geometryString', 'tankType'),
                        $(go.TextBlock, {
                            font: 'bold 13px InterVariable, sans-serif',
                            stroke: colors.black,
                        }).bind('text', 'key')
                    )
                )
        );

        // Label template
        myDiagram.nodeTemplateMap.add('label',
            $(go.Node, 'Auto')
                .bindTwoWay('location', 'pos', go.Point.parse, go.Point.stringify)
                .add(
                    $(go.Shape, {
                        portId: '',
                        fromSpot: go.Spot.Right,
                        toSpot: go.Spot.LeftRightSides,
                        geometryString: labelRight,
                        strokeWidth: 4,
                        fill: colors.black,
                    })
                        .bind('width')
                        .bind('height')
                        .bind('geometryString', 'direction', d => d === 'right' ? labelRight : labelLeft)
                        .bind('stroke', 'color'),
                    $(go.TextBlock, {
                        margin: new go.Margin(8, 40, 8, 8),
                        textAlign: 'center',
                        font: '12px sans-serif',
                        stroke: colors.white,
                        alignment: new go.Spot(0.1, 0.5),
                    })
                        .bind('margin', 'direction', d => d === 'right' ? new go.Margin(8, 40, 8, 8) : new go.Margin(8, 8, 8, 40))
                        .bind('alignment', 'direction', d => d === 'right' ? new go.Spot(0.3, 0.5) : new go.Spot(0.7, 0.5))
                        .bind('text')
                )
        );

        // Valve template
        myDiagram.nodeTemplateMap.add('valve',
            $(go.Node, 'Vertical', {
                locationSpot: new go.Spot(0.5, 1, 0, -21),
                locationObjectName: 'SHAPE',
                selectionObjectName: 'SHAPE',
                rotatable: true,
            })
                .bindTwoWay('angle')
                .bindTwoWay('location', 'pos', go.Point.parse, go.Point.stringify)
                .add(
                    $(go.TextBlock, {
                        background: colors.black,
                        alignment: go.Spot.Center,
                        textAlign: 'center',
                        margin: 2,
                        editable: true,
                    })
                        .set(textDefaults)
                        .bind('text', 'key')
                        .bindObject('angle', 'angle', a => a === 180 ? 180 : 0),
                    $(go.Shape, {
                        name: 'SHAPE',
                        geometryString: valve,
                        strokeWidth: 2,
                        portId: '',
                        fromSpot: new go.Spot(1, 0.35),
                        toSpot: new go.Spot(0, 0.35),
                    })
                        .bind('fill', 'color')
                        .bind('stroke', 'color', c => go.Brush.darkenBy(c, 0.3))
                )
        );

        // Pump template
        myDiagram.nodeTemplateMap.add('pump',
            $(go.Node, 'Vertical', {
                locationSpot: new go.Spot(0.5, 1, 0, -21),
                locationObjectName: 'SHAPE',
                selectionObjectName: 'SHAPE',
                rotatable: true,
            })
                .bindTwoWay('angle')
                .bindTwoWay('location', 'pos', go.Point.parse, go.Point.stringify)
                .add(
                    $(go.TextBlock, {
                        background: colors.black,
                        alignment: go.Spot.Center,
                        textAlign: 'center',
                        margin: 2,
                        editable: true,
                    })
                        .set(textDefaults)
                        .bind('text', 'key')
                        .bindObject('angle', 'angle', a => a === 180 ? 180 : 0),
                    $(go.Shape, {
                        name: 'SHAPE',
                        geometryString: pump,
                        width: 45,
                        height: 40,
                        strokeWidth: 2,
                        portId: '',
                        fromSpot: new go.Spot(1, 0.25),
                        toSpot: new go.Spot(0, 0.5),
                    })
                        .bind('fill', 'color')
                        .bind('stroke', 'color', c => go.Brush.darkenBy(c, 0.3))
                )
        );

        // Monitor template components
        const valuesTableItem = $(go.Panel, 'TableRow').add(
            $(go.TextBlock, '').set(textDefaults).bind('text', 'label'),
            $(go.Panel, 'Spot', { column: 1 }).add(
                $(go.Shape, {
                    stroke: colors.orange,
                    fill: colors.black,
                    margin: 2,
                    width: 40,
                    height: 15,
                }),
                $(go.TextBlock, '', {}).set(textDefaults).bind('text', 'value')
            ),
            $(go.TextBlock, '', { column: 2, alignment: go.Spot.Left })
                .set(textDefaults)
                .bind('text', 'unit')
        );

        const valuesTable = $(go.Panel, 'Table', { itemTemplate: valuesTableItem }).bind(
            'itemArray',
            'values'
        );

        const statusPanelTemplate = $(go.Panel, 'Spot').add(
            $(go.Shape, { width: 18, height: 18, fill: colors.white }).bind('fill'),
            $(go.TextBlock).set(textDefaults).bind('text')
        );

        const statusPanel = $(go.Panel, 'Horizontal', {
            width: 90,
            height: 20,
            itemTemplate: statusPanelTemplate,
        }).bind('itemArray', 'statuses');

        // Monitor template
        myDiagram.nodeTemplateMap.add('monitor',
            $(go.Node, 'Auto')
                .bindTwoWay('location', 'pos', go.Point.parse, go.Point.stringify)
                .add(
                    $(go.Shape, { fill: colors.black, stroke: colors.white, strokeWidth: 2 }),
                    $(go.Panel, 'Vertical', { margin: 4 }).add(
                        $(go.TextBlock, 'Title', {}).set(textDefaults).bind('text', 'title'),
                        statusPanel,
                        valuesTable
                    )
                )
        );

        // Sensor template
        myDiagram.nodeTemplateMap.add('sensor',
            $(go.Node, 'Vertical')
                .bindTwoWay('location', 'pos', go.Point.parse, go.Point.stringify)
                .add(
                    $(go.Panel, 'Horizontal', { margin: 4 }).add(
                        $(go.Shape, {
                            fill: colors.black,
                            stroke: colors.white,
                            strokeWidth: 2,
                            geometryString: sensor,
                            portId: '',
                            fromSpot: new go.Spot(0, 0.4, 0, 0),
                        }),
                        $(go.TextBlock, { margin: 2 }).set(textDefaults).bind('text', 'key')
                    ),
                    $(go.Panel, 'Horizontal').add(
                        $(go.Panel, 'Spot', { column: 1 }).add(
                            $(go.Shape, {
                                stroke: colors.orange,
                                fill: colors.black,
                                margin: 2,
                                width: 40,
                                height: 15,
                            }),
                            $(go.TextBlock, '', {}).set(textDefaults).bind('text', 'value')
                        ),
                        $(go.TextBlock, '', { column: 2, alignment: go.Spot.Left })
                            .set(textDefaults)
                            .bind('text', 'unit')
                    )
                )
        );

        // Link templates
        myDiagram.linkTemplateMap.add('',
            $(go.Link, {
                routing: go.Routing.AvoidsNodes,
                corner: 12,
                layerName: 'Background',
                toShortLength: 3,
            })
                .bind('fromEndSegmentLength', 'fromEndSeg')
                .bind('toEndSegmentLength', 'toEndSeg')
                .add(
                    $(go.Shape, { strokeWidth: 8, stroke: colors.black, isPanelMain: true }),
                    $(go.Shape, {
                        strokeWidth: 3.5,
                        stroke: colors.green,
                        isPanelMain: true,
                    }).bind('stroke', 'color'),
                    $(go.Shape, { stroke: colors.green, fill: colors.green, toArrow: 'Triangle' })
                        .bind('stroke', 'color')
                        .bind('fill', 'color'),
                    $(go.Panel, 'Auto', { visible: false })
                        .bind('visible', 'text', t => true)
                        .add(
                            $(go.Shape, 'RoundedRectangle', { strokeWidth: 1, fill: colors.gray }),
                            $(go.TextBlock, { margin: new go.Margin(3, 1, 1, 1) })
                                .set(textDefaults)
                                .bind('text')
                        )
                )
        );

        myDiagram.linkTemplateMap.add('monitor',
            $(go.Link, {
                curve: go.Curve.Bezier,
                layerName: 'Background',
                fromSpot: go.Spot.Top,
                fromEndSegmentLength: 30,
            })
                .bind('fromSpot', 'fs')
                .bind('toSpot', 'ts')
                .add(
                    $(go.Shape, {
                        strokeWidth: 3,
                        stroke: colors.white,
                        strokeDashArray: [3, 4],
                        isPanelMain: true,
                    }).bind('stroke', 'color')
                )
        );

        myDiagram.linkTemplateMap.add('sensor',
            $(go.Link, {
                layerName: 'Background',
            }).add(
                $(go.Shape, { strokeWidth: 1.5, stroke: colors.red, strokeDashArray: [2, 2] })
            )
        );

        // Model data
        myDiagram.model = $(go.GraphLinksModel, {
            copiesArrays: true,
            copiesArrayObjects: true,
            linkFromPortIdProperty: 'fromPort',
            linkToPortIdProperty: 'toPort',
            nodeDataArray: [
                // LABELS
                {
                    key: 'inputFlow',
                    category: 'label',
                    text: 'Поток жидкости',
                    color: colors.blue,
                    pos: '0 210',
                },
                {
                    key: 'outputFlow',
                    category: 'label',
                    text: 'Поток жидкости на выходе',
                    color: colors.blue,
                    direction: 'left',
                    pos: '700 280',
                },
                // TANKS
                {
                    key: 'Tank',
                    color: colors.black,
                    pos: '400 200',
                    ports: [
                        { p: 'input_tank', a: new go.Spot(0, 0, 0, 30) },
                        { p: 'output_tank', a: new go.Spot(1, 1, 0, -50), fs: go.Spot.Right },
                        { p: 'output2_tank', a: new go.Spot(1, 1, 0,-70), fs: go.Spot.Right },
                    ],
                },
                // VALVES
                //
                {
                    key: 'LC-01',
                    category: 'valve',
                    color: colors.red,
                    pos: '600 290',
                    angle: 0,
                },
                //

                // MONITOR PANELS
                //
                {
                    key: 'cLC-01',
                    title: 'Monitor LC-01',
                    category: 'monitor',
                    pos: '550 50',
                    values: [
                        { label: 'SV', unit: 'м', value: '12.0' },
                        { label: 'PV', unit: 'м', value: '12.0' },
                        { label: 'OP', unit: '%', value: '25.0' },
                    ],
                    statuses: [
                        { fill: colors.green },
                        { fill: colors.green },
                        { fill: colors.green },
                        { fill: colors.red },
                    ],
                },
                //
                {
                    key: 'cTCV102',
                    title: 'Monitor TCV102',
                    category: 'monitor',
                    pos: '32 35',
                    values: [
                        { label: 'SV', unit: '°C', value: '12.0' },
                        { label: 'PV', unit: '°C', value: '12.0' },
                        { label: 'OP', unit: '%', value: '25.0' },
                    ],
                    statuses: [
                        { fill: colors.green },
                        { fill: colors.green },
                        { fill: colors.green },
                    ],
                },

                // SENSORS:
                //
                { key: 'level', category: 'sensor', value: '1.5', pos: '500 220', unit: 'м' },
                //
            ],
            linkDataArray: [
                //
                {from: 'inputFlow', to: 'Tank', toPort: 'input_tank', color: colors.blue, text: 'Входной расход'},
                {from: 'Tank', to: 'LC-01', fromPort: 'output_tank', color: colors.blue},
                {from: 'LC-01', to: 'outputFlow', color: colors.blue, text: 'Выход'},
                { category: 'sensor', from: 'level', to: 'Tank', toPort: 'output2_tank' },
                //

                //
                { category: 'monitor', from: 'LC-01', to: 'cLC-01', ts: go.Spot.Bottom },

                //


                {
                    category: 'monitor',
                    from: 'FM103',
                    to: 'cFM103',
                    fs: go.Spot.Bottom,
                    ts: go.Spot.Bottom,
                },
                // sensor links (same category)
                //
                //
            ],
        });

        // Simulation functions
        const roundAndFloor = (num: number, decimalPlaces = 0) => {
            num = Math.round(Number(num + 'e' + decimalPlaces));
            return Math.max(Number(num + 'e' + -decimalPlaces), 0);
        };

        const random = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        // Simulate data updates
        const intervalId = setInterval(() => {
            myDiagram.commit(() => {
                const sensorKeys = ['S1', 'S2'].map(k => myDiagram.findNodeForKey(k));
                for (const n of sensorKeys) {
                    if (!n) continue;
                    const d = n.data;
                    myDiagram.model.setDataProperty(
                        d,
                        'value',
                        roundAndFloor(parseFloat(d.value) + random(-0.5, 0.55), 1).toString()
                    );
                }
            }, null);

            if (+new Date() % 2 === 0) return;
            myDiagram.commit(() => {
                const controlNodes = ['cTCV102', 'cFCV101', 'cFM102', 'cFM103'].map(k =>
                    myDiagram.findNodeForKey(k)
                );
                for (const n of controlNodes) {
                    if (!n) continue;
                    const vals = n.data.values;
                    myDiagram.model.setDataProperty(
                        vals[0],
                        'value',
                        roundAndFloor(parseFloat(vals[0].value) + random(-0.5, 0.55), 1).toString()
                    );
                    myDiagram.model.setDataProperty(
                        vals[1],
                        'value',
                        roundAndFloor(parseFloat(vals[1].value) + random(-0.3, 0.35), 1).toString()
                    );
                    myDiagram.model.setDataProperty(
                        vals[2],
                        'value',
                        roundAndFloor(parseFloat(vals[2].value) + random(-0.2, 0.2), 1).toString()
                    );
                }
            }, null);

            if (+new Date() % 15 === 0) return;
            myDiagram.commit(() => {
                const controlNodes = ['cTCV102', 'cFCV101', 'cFM102', 'cFM103'].map(k =>
                    myDiagram.findNodeForKey(k)
                );
                for (const n of controlNodes) {
                    if (!n) continue;
                    const vals = n.data.statuses;
                    myDiagram.model.setDataProperty(
                        vals[0],
                        'fill',
                        Math.random() > 0.5 ? colors.green : colors.white
                    );
                    myDiagram.model.setDataProperty(
                        vals[1],
                        'fill',
                        Math.random() > 0.5 ? colors.yellow : colors.white
                    );
                }
            }, null);
        }, 550);

        return () => {
            clearInterval(intervalId);
            if (myDiagram) myDiagram.clear();
        };
    }, []);

    return (
            <div id="sample" style={{width: '100%'}}>
                <div
                    ref={diagramRef}
                    style={{
                        backgroundColor: 'var(--bg-color)',
                        height: '100%',
                    }}
                ></div>
            </div>
    );
};


