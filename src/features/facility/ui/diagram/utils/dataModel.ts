import * as go from 'gojs';
import { COLORS } from './constants';

export const createModel = () => {
    const $ = go.GraphObject.make;

    return $(go.GraphLinksModel, {
        copiesArrays: true,
        copiesArrayObjects: true,
        linkFromPortIdProperty: 'fromPort',
        linkToPortIdProperty: 'toPort',
        nodeDataArray: [
            {
                key: 'inputFlow',
                category: 'label',
                text: 'Поток жидкости',
                pos: '0 210',
            },
            {
                key: 'outputFlow',
                category: 'label',
                text: 'Поток жидкости на выходе',
                direction: 'left',
                pos: '700 280',
            },
            {
                key: 'Tank',
                color: COLORS.black,
                pos: '400 200',
                ports: [
                    { p: 'input_tank', a: new go.Spot(0, 0, 0, 30) },
                    { p: 'output_tank', a: new go.Spot(1, 1, 0, -50), fs: go.Spot.Right },
                    { p: 'output2_tank', a: new go.Spot(1, 1, 0,-70), fs: go.Spot.Right },
                ],
            },
            {
                key: 'LC-01',
                category: 'valve',
                color: COLORS.red,
                pos: '600 290',
                angle: 0,
            },
            // {
            //     key: 'cLC-01',
            //     title: 'Monitor LC-01',
            //     category: 'monitor',
            //     pos: '550 50',
            //     values: [
            //         { label: 'SV', unit: 'м', value: '12.0' },
            //         { label: 'PV', unit: 'м', value: '12.0' },
            //         { label: 'OP', unit: '%', value: '25.0' },
            //     ],
            //     statuses: [
            //         { fill: COLORS.green },
            //         { fill: COLORS.green },
            //         { fill: COLORS.green },
            //         { fill: COLORS.red },
            //     ],
            // },
            {
                key: 'level',
                category: 'sensor',
                value: '1.5',
                pos: '500 220',
                unit: 'м'
            }
        ],
        linkDataArray: [
            { from: 'inputFlow', to: 'Tank', toPort: 'input_tank', color: COLORS.blue, text: 'Входной расход' },
            { from: 'Tank', to: 'LC-01', fromPort: 'output_tank', color: COLORS.blue} ,
            { from: 'LC-01', to: 'outputFlow', color: COLORS.blue, text: 'Выход' },
            { category: 'sensor', from: 'level', to: 'Tank', toPort: 'output2_tank' },
            { category: 'monitor', from: 'LC-01', to: 'cLC-01', ts: go.Spot.Bottom }
        ]
    });
};