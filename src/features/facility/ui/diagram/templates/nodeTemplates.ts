import * as go from 'gojs';
import { COLORS, GEOMETRY, TEXT_DEFAULTS } from '../utils/constants';

export const createNodeTemplates = ($: typeof go.GraphObject.make) => {
    const templates = new go.Map<string, go.Node>();

    templates.add('', createTankTemplate($));
    templates.add('label', createLabelTemplate($));
    templates.add('valve', createValveTemplate($));
    templates.add('monitor', createMonitorTemplate($));
    templates.add('sensor', createSensorTemplate($));

    return templates;
};

const createTankTemplate = ($: typeof go.GraphObject.make) => {
    const tankPort = $(go.Panel)
        .bind('alignment', 'a')
        .bind('portId', 'p')
        .bind('fromSpot', 'fs')
        .bind('toSpot', 'ts')
        .add($(go.Shape, 'Diamond', { width: 10, height: 10, fill: COLORS.white }));

    return $(go.Node, 'Spot', {
        itemTemplate: tankPort,
    })
        .bindTwoWay('location', 'pos', go.Point.parse, go.Point.stringify)
        .bind('itemArray', 'ports')
        .add(
            $(go.Panel, 'Spot').add(
                $(go.Shape, {
                    geometryString: GEOMETRY.tank3,
                    strokeWidth: 1,
                    stroke: 'gray',
                    width: 75,
                    height: 140,
                    fill: $(go.Brush, 'Linear', {
                        0: go.Brush.darken(COLORS.white),
                        0.2: COLORS.white,
                        0.33: go.Brush.lighten(COLORS.white),
                        0.5: COLORS.white,
                        1: go.Brush.darken(COLORS.white),
                        start: go.Spot.Left,
                        end: go.Spot.Right,
                    }),
                })
                    .bind('width')
                    .bind('height')
                    .bind('geometryString', 'tankType'),
                $(go.TextBlock, {
                    font: 'bold 13px InterVariable, sans-serif',
                    stroke: COLORS.black,
                }).bind('text', 'key')
            )
        );
};

const createLabelTemplate = ($: typeof go.GraphObject.make) => {
    return $(go.Node, 'Auto')
        .bindTwoWay('location', 'pos', go.Point.parse, go.Point.stringify)
        .add(
            $(go.Shape, {
                portId: '',
                fromSpot: go.Spot.Right,
                toSpot: go.Spot.LeftRightSides,
                geometryString: GEOMETRY.labelRight,
                strokeWidth: 0,
                fill: COLORS.gray,
            })
                .bind('width')
                .bind('height')
                .bind('geometryString', 'direction', d => d === 'right' ? GEOMETRY.labelRight : GEOMETRY.labelLeft)
                .bind('stroke', 'color'),
            $(go.TextBlock, {
                margin: new go.Margin(8, 40, 8, 8),
                textAlign: 'center',
                font: '12px sans-serif',
                stroke: COLORS.white,
                alignment: new go.Spot(0.1, 0.5),
            })
                .bind('margin', 'direction', d => d === 'right' ? new go.Margin(8, 40, 8, 8) : new go.Margin(8, 8, 8, 40))
                .bind('alignment', 'direction', d => d === 'right' ? new go.Spot(0.3, 0.5) : new go.Spot(0.7, 0.5))
                .bind('text')
        );
};

const createValveTemplate = ($: typeof go.GraphObject.make) => {
    return $(go.Node, 'Vertical', {
        locationSpot: new go.Spot(0.5, 1, 0, -21),
        locationObjectName: 'SHAPE',
        selectionObjectName: 'SHAPE',
        rotatable: true,
    })
        .bindTwoWay('angle')
        .bindTwoWay('location', 'pos', go.Point.parse, go.Point.stringify)
        .add(
            $(go.TextBlock, {
                background: COLORS.red,
                alignment: go.Spot.Center,
                textAlign: 'center',
                margin: 2,
                // editable: true,
            })
                .set(TEXT_DEFAULTS)
                .bind('text', 'key')
                .bindObject('angle', 'angle', a => a === 180 ? 180 : 0),
            $(go.Shape, {
                name: 'SHAPE',
                geometryString: GEOMETRY.valve,
                strokeWidth: 2,
                portId: '',
                fromSpot: new go.Spot(1, 0.35),
                toSpot: new go.Spot(0, 0.35),
            })
                .bind('fill', 'color')
                .bind('stroke', 'color', c => go.Brush.darkenBy(c, 0.3))
        );
};

const createMonitorTemplate = ($: typeof go.GraphObject.make) => {
    const valuesTableItem = $(go.Panel, 'TableRow').add(
        $(go.TextBlock, '').set(TEXT_DEFAULTS).bind('text', 'label'),
        $(go.Panel, 'Spot', { column: 1 }).add(
            $(go.Shape, {
                stroke: COLORS.orange,
                fill: COLORS.black,
                margin: 2,
                width: 40,
                height: 15,
            }),
            $(go.TextBlock, '', {
                editable: true,
                isMultiline: false, // запрещаем многострочный ввод
            }).set(TEXT_DEFAULTS).bind('text', 'value')
        ),
        $(go.TextBlock, '', { column: 2, alignment: go.Spot.Left })
            .set(TEXT_DEFAULTS)
            .bind('text', 'unit'),
        $(go.Panel, 'Spot', {
            column: 3,
            visible: false
        })
            .bind('visible', '', (_, obj) => {
                const panel = obj.panel;
                return panel?.data?.editable === true;
            })
            .add(
                $(go.Shape, 'Rectangle', {
                    fill: COLORS.green,
                    width: 20,
                    height: 15,
                    margin: 2,
                    cursor: 'pointer'
                }),
                $(go.TextBlock, 'OK', {
                    font: 'bold 10px sans-serif',
                    stroke: COLORS.white
                })
            )
    );

    const valuesTable = $(go.Panel, 'Table', {
        itemTemplate: valuesTableItem,
        defaultAlignment: go.Spot.Left // выравнивание по левому краю
    }).bind('itemArray', 'values');

    const statusPanelTemplate = $(go.Panel, 'Spot').add(
        $(go.Shape, { width: 18, height: 18, fill: COLORS.white }).bind('fill'),
        $(go.TextBlock).set(TEXT_DEFAULTS).bind('text')
    );

    const statusPanel = $(go.Panel, 'Horizontal', {
        width: 90,
        height: 20,
        itemTemplate: statusPanelTemplate,
    }).bind('itemArray', 'statuses');

    return $(go.Node, 'Auto')
        .bindTwoWay('location', 'pos', go.Point.parse, go.Point.stringify)
        .add(
            $(go.Shape, {
                fill: COLORS.black,
                stroke: COLORS.white,
                strokeWidth: 2
            }),
            $(go.Panel, 'Vertical', { margin: 4 }).add(
                $(go.TextBlock, 'Title', {})
                    .set(TEXT_DEFAULTS)
                    .bind('text', 'title'),
                statusPanel,
                valuesTable
            )
        );
};

const createSensorTemplate = ($: typeof go.GraphObject.make) => {
    return $(go.Node, 'Vertical')
        .bindTwoWay('location', 'pos', go.Point.parse, go.Point.stringify)
        .add(
            $(go.Panel, 'Horizontal', { margin: 4 }).add(
                $(go.Shape, {
                    fill: COLORS.black,
                    stroke: COLORS.white,
                    strokeWidth: 2,
                    geometryString: GEOMETRY.sensor,
                    portId: '',
                    fromSpot: new go.Spot(0, 0.4, 0, 0),
                }),
                $(go.TextBlock, { margin: 2 })
                    .set(TEXT_DEFAULTS)
                    .bind('text', 'key')
            ),
            $(go.Panel, 'Horizontal').add(
                $(go.Panel, 'Spot', { column: 1 }).add(
                    $(go.Shape, {
                        stroke: COLORS.orange,
                        fill: COLORS.black,
                        margin: 2,
                        width: 40,
                        height: 15,
                    }),
                    $(go.TextBlock, '', {})
                        .set(TEXT_DEFAULTS)
                        .bind('text', 'value')
                ),
                $(go.TextBlock, '', {
                    column: 2,
                    alignment: go.Spot.Left
                })
                    .set(TEXT_DEFAULTS)
                    .bind('text', 'unit')
            )
        );
};