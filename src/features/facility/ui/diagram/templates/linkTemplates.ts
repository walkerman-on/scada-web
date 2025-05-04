import * as go from 'gojs';
import {COLORS, TEXT_DEFAULTS} from '../utils/constants';

export const createLinkTemplates = ($: typeof go.GraphObject.make) => {
    const templates = new go.Map<string, go.Link>();

    templates.add('', createDefaultLinkTemplate($));
    templates.add('monitor', createMonitorLinkTemplate($));
    templates.add('sensor', createSensorLinkTemplate($));

    return templates;
};

const createDefaultLinkTemplate = ($: typeof go.GraphObject.make) => {
    return $(go.Link, {
        routing: go.Routing.AvoidsNodes,
        corner: 12,
        layerName: 'Background',
        toShortLength: 3,
    })
        .bind('fromEndSegmentLength', 'fromEndSeg')
        .bind('toEndSegmentLength', 'toEndSeg')
        .add(
            $(go.Shape, {
                strokeWidth: 8,
                stroke: COLORS.black,
                isPanelMain: true,
            }),
            $(go.Shape, {
                strokeWidth: 3.5,
                stroke: COLORS.green,
                isPanelMain: true,
            }).bind('stroke', 'color'),
            $(go.Shape, {
                stroke: COLORS.green,
                fill: COLORS.green,
                toArrow: 'Triangle'
            })
                .bind('stroke', 'color')
                .bind('fill', 'color'),
            $(go.Panel, 'Auto', { visible: false })
                .bind('visible', 'text', t => !!t)
                .add(
                    $(go.Shape, 'RoundedRectangle', {
                        strokeWidth: 1,
                        fill: COLORS.gray
                    }),
                    $(go.TextBlock, {
                        margin: new go.Margin(3, 1, 1, 1)
                    })
                        .set(TEXT_DEFAULTS)
                        .bind('text')
                )
        );
};

const createMonitorLinkTemplate = ($: typeof go.GraphObject.make) => {
    return $(go.Link, {
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
                stroke: COLORS.white,
                strokeDashArray: [3, 4],
                isPanelMain: true,
            }).bind('stroke', 'color')
        );
};

const createSensorLinkTemplate = ($: typeof go.GraphObject.make) => {
    return $(go.Link, {
        layerName: 'Background',
    }).add(
        $(go.Shape, {
            strokeWidth: 1.5,
            stroke: COLORS.red,
            strokeDashArray: [2, 2]
        })
    );
};