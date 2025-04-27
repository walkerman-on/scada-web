// types.ts
export interface ScadaNodeData extends go.ObjectData {
    key: string | number;
    category?: string;
    label?: string;
    loc?: string;
    level?: number;
    power?: number;
    open?: number;
    flow?: number;
    width?: number;
    height?: number;
}

export interface ScadaLinkData extends go.ObjectData {
    key?: string | number;
    from: string | number;
    to: string | number;
    flow?: number;
}

export interface ScadaModel {
    nodeDataArray: ScadaNodeData[];
    linkDataArray: ScadaLinkData[];
}