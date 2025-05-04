export interface MonitorValue {
    label: string;
    unit: string;
    value: string;
    nodeId: string;
}

export interface MonitorData {
    key: string;
    category: string;
    title?: string;
    pos: string;
    values: MonitorValue[];
    statuses: Array<{ fill: string; text: string }>;
}

export interface SensorData {
    key: string;
    category: string;
    value: string;
    pos: string;
    unit?: string;
    nodeId?: string;
}


export interface WebSocketMessage {
    nodeId: string;
    value: number;
    unit?: string;
    timestamp?: string | number;  // Изменено с string на number
}

