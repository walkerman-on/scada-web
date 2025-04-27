import * as go from "gojs";
import { useEffect } from "react";
import { setupDiagramTemplates } from "./diagramConfig";

export function useDiagram(container: HTMLDivElement) {
    const $ = go.GraphObject.make;

    const diagram = $(go.Diagram, container, {
        "undoManager.isEnabled": true,
        "animationManager.isEnabled": false,
        "rotatingTool.snapAngleMultiple": 90,
        "rotatingTool.snapAngleEpsilon": 45,
        "linkingTool.direction": go.LinkingTool.ForwardsOnly,
        initialContentAlignment: go.Spot.Center,
    });

    setupDiagramTemplates(diagram);

    diagram.model = new go.GraphLinksModel({
        copiesArrays: true,
        copiesArrayObjects: true,
        linkFromPortIdProperty: "fromPort",
        linkToPortIdProperty: "toPort",
        nodeDataArray: [],
        linkDataArray: [],
    });

    return diagram;
}