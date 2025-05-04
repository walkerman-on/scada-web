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
                color: COLORS.blue,
                pos: '0 210',
            },
            {
                key: 'outputFlow',
                category: 'label',
                text: 'На выход из системы',
                color: COLORS.blue,
                direction: 'left',
                pos: '0 300',
            },
            {
                key: 'Tank',
                color: COLORS.black,
                pos: '400 200',
                ports: [
                    { p: 'input_tank', a: new go.Spot(0, 0, 0, 30) },
                    { p: 'output_tank', a: new go.Spot(1, 1, 0, -50), fs: go.Spot.Right },
                    { p: 'output2_tank', a: new go.Spot(1, 1, 0, -70), fs: go.Spot.Right },
                ],
            },
            {
                key: 'LC-01',
                category: 'valve',
                color: COLORS.green,
                pos: '400 400',
                angle: 180,
            },
            {
                key: 'cLC-01',
                title: 'Monitor LC-01',
                category: 'monitor',
                pos: '350 450',
                values: [
                    {
                        label: 'SP',
                        unit: 'м',
                        value: '12.0',
                        editable: true, // добавим флаг
                        nodeId: 'ns=1;s=setPointLevel' // Добавляем связь с OPC UA узлом
                    },
                    {
                        label: 'PV',
                        unit: 'м',
                        value: '12.0',
                        nodeId: 'ns=1;s=level' // Связь с датчиком уровня
                    },
                    {
                        label: 'OP',
                        unit: '%',
                        value: '25.0',
                        nodeId: 'ns=1;s=valveOpening' // Связь с положением клапана
                    },
                ],
                statuses: [
                    { fill: COLORS.green, text: 'OK' },
                    { fill: COLORS.red, text: 'ALARM' },
                ],
            },
            {
                key: 'ns=1;s=level',
                label: 'level',
                category: 'sensor',
                value: '1.5',
                pos: '500 220',
                unit: 'м'
            },
        ],
        linkDataArray: [
            {
                from: 'inputFlow',
                to: 'Tank',
                toPort: 'input_tank',
                color: COLORS.blue,
                text: 'Входной расход'
            },
            {
                from: 'Tank',
                to: 'LC-01',
                fromPort: 'output_tank',
                color: COLORS.blue,
                fromEndSeg: 20
            },
            {
                from: 'LC-01',
                to: 'outputFlow',
                color: COLORS.blue,
                text: 'Расход после клапана',
                toEndSeg: 15
            },
            {
                category: 'sensor',
                from: 'ns=1;s=level',
                to: 'Tank',
                toPort: 'output2_tank'
            },
            {
                category: 'monitor',
                from: 'LC-01',
                to: 'cLC-01',
                ts: go.Spot.Bottom,
                color: COLORS.yellow
            },
            {
                category: 'sensor',
                from: 'ns=1;s=temp',
                to: 'Tank',
                toPort: 'output2_tank'
            }
        ]
    });
};