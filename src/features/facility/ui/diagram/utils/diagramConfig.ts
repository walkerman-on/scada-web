import * as go from 'gojs';
import { COLORS, TEXT_DEFAULTS } from './constants';
import { createNodeTemplates } from '../templates/nodeTemplates';
import { createLinkTemplates } from '../templates/linkTemplates';

export const setupDiagram = (divElement: HTMLDivElement) => {
    const $ = go.GraphObject.make;

    const diagram = $(go.Diagram, divElement, {
        'animationManager.isEnabled': false,
        'undoManager.isEnabled': true,
        'rotatingTool.snapAngleMultiple': 90,
        'rotatingTool.snapAngleEpsilon': 45,
    });

    const nodeTemplates = createNodeTemplates($);
    const linkTemplates = createLinkTemplates($);

    diagram.nodeTemplateMap = nodeTemplates;
    diagram.linkTemplateMap = linkTemplates;

    return diagram;
};