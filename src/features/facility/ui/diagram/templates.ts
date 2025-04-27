// templates.ts
import * as go from 'gojs';

const LIQUID_COLOR = '#0EAD69';
const MAX_LIQUID_COLOR = '#ED2637';
const MIN_LIQUID_COLOR = '#FFD23F';

export const createPumpTemplate = (): go.Node => {
    const $ = go.GraphObject.make;

    return $(
        go.Node,
        'Auto',
        {
            resizable: true,
            resizeObjectName: 'SHAPE'
        },
        $(
            go.Shape,
            'Circle',
            {
                name: 'SHAPE',
                fill: 'lightgray',
                stroke: 'gray',
                strokeWidth: 2,
                width: 100,
                height: 100
            }
        ),
        $(
            go.TextBlock,
            {
                text: 'Pump',
                margin: 10,
                stroke: '#350100',
                font: '14px sans-serif'
            },
            new go.Binding('text', 'label')
        ),
        // Rotor group
        $(
            go.Panel,
            'Spot',
            { margin: 10 },
            $(
                go.Shape,
                'Circle',
                {
                    fill: '#eee',
                    stroke: '#666',
                    strokeWidth: 2,
                    width: 80,
                    height: 80
                }
            ),
            $(
                go.Shape,
                'Circle',
                {
                    fill: '#777',
                    stroke: '#222',
                    strokeWidth: 1,
                    width: 68,
                    height: 68
                }
            ),
            $(
                go.Shape,
                {
                    geometryString: 'M 0 0 V 30 l -5 -15 Z M 0 0 V -30 l 5 15 Z M 0 0 H 30 l -15 5 Z M 0 0 H -30 l 15 -5 Z',
                    stroke: '#222',
                    strokeWidth: 3,
                    fill: '#bbb'
                }
            )
        )
    );
};

export const createLiquidTankTemplate = (): go.Node => {
    const $ = go.GraphObject.make;

    return $(
        go.Node,
        'Vertical',
        {
            resizable: true,
            resizeObjectName: 'BODY'
        },
        $(
            go.Shape,
            {
                name: 'BODY',
                stroke: 'gray',
                strokeWidth: 4,
                width: 160,
                height: 300,
                fill: 'white',
                geometryString: 'M0 0 L160 0 L160 300 L0 300 Z',
                portId: '',
                fromSpot: go.Spot.AllSides,
                toSpot: go.Spot.AllSides
            }
        ),
        $(
            go.Shape,
            {
                fill: LIQUID_COLOR,
                stroke: 'none',
                width: 160,
                height: 0,
                alignment: new go.Spot(0, 1, 0, 0),
                alignmentFocus: go.Spot.Bottom
            },
            new go.Binding('height', 'level', level => (level || 0) * 3),
            new go.Binding('fill', 'level', level =>
                level > 80 ? MAX_LIQUID_COLOR :
                    level < 20 ? MIN_LIQUID_COLOR :
                        LIQUID_COLOR)
        ),
        $(
            go.TextBlock,
            {
                text: 'Tank',
                margin: new go.Margin(5, 0, 0, 0),
                stroke: '#350100',
                font: '14px sans-serif'
            },
            new go.Binding('text', 'label')
        )
    );
};

// Add more template creation functions for other components