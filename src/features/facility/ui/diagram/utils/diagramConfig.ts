import * as go from 'gojs';
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

    diagram.nodeTemplateMap = createNodeTemplates($);
    diagram.linkTemplateMap = createLinkTemplates($);

    return diagram;
};