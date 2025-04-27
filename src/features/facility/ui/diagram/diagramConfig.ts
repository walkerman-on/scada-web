import * as go from "gojs";
import { colors } from "./colors";
import { shapes } from "./shapes";

export function setupDiagramTemplates(diagram: go.Diagram) {
    const $ = go.GraphObject.make;

    // === Общие настройки текстов
    const textDefaults = {
        font: "bold 12px Inter, sans-serif",
        stroke: colors.white,
    };

    // === Шаблон для обычного нода (например, бак или элемент без категории)
    diagram.nodeTemplate = $(
        go.Node,
        "Auto",
        $(go.Shape, "RoundedRectangle", {
            fill: colors.blue,
            stroke: colors.white,
            strokeWidth: 2,
            width: 100,
            height: 50,
        }),
        $(go.TextBlock, textDefaults, { margin: 8 }, new go.Binding("text", "key"))
    );

    // === Шаблон для «valve»
    diagram.nodeTemplateMap.add(
        "valve",
        $(
            go.Node,
            "Vertical",
            { rotatable: true },
            new go.Binding("angle").makeTwoWay(),
            $(go.Shape, {
                geometryString: shapes.valve,
                fill: colors.red,
                stroke: colors.white,
                strokeWidth: 2,
                width: 50,
                height: 50,
                portId: "",
            }),
            $(go.TextBlock, textDefaults, { margin: 4 }, new go.Binding("text", "key"))
        )
    );

    // === Шаблон для «pump»
    diagram.nodeTemplateMap.add(
        "pump",
        $(
            go.Node,
            "Vertical",
            { rotatable: true },
            new go.Binding("angle").makeTwoWay(),
            $(go.Shape, {
                geometryString: shapes.pump,
                fill: colors.pink,
                stroke: colors.white,
                strokeWidth: 2,
                width: 40,
                height: 40,
                portId: "",
            }),
            $(go.TextBlock, textDefaults, { margin: 4 }, new go.Binding("text", "key"))
        )
    );

    // === Шаблон для линков
    diagram.linkTemplate = $(
        go.Link,
        {
            routing: go.Routing.AvoidsNodes,
            curve: go.Curve.JumpOver,
            corner: 10,
            toShortLength: 3,
            layerName: "Background",
        },
        $(go.Shape, { isPanelMain: true, strokeWidth: 4, stroke: colors.green }),
        $(go.Shape, { toArrow: "Standard", stroke: null, fill: colors.green })
    );
}