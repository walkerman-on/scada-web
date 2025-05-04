import * as go from 'gojs';
import { WebSocketMessage, MonitorData, SensorData } from './types';

export const handleWebSocketMessage = (
    diagram: go.Diagram | null,
    message: WebSocketMessage | null
) => {
    if (!diagram || !message) return;

    diagram.commit(() => {
        // Обновление сенсоров
        const sensorNode = diagram.findNodeForKey(message.nodeId);
        if (sensorNode) {
            const d = sensorNode.data as SensorData;
            diagram.model.setDataProperty(d, 'value', message.value.toFixed(4));
            if (message.unit) {
                diagram.model.setDataProperty(d, 'unit', message.unit);
            }
        }

        // Обновление монитора
        const monitorNode = diagram.findNodeForKey('cLC-01');
        if (monitorNode) {
            const monitorData = monitorNode.data as MonitorData;
            const updatedValues = monitorData.values.map(item => {
                if (item.nodeId === message.nodeId) {
                    return {
                        ...item,
                        value: message.value.toFixed(4),
                        unit: message.unit || item.unit
                    };
                }
                return item;
            });

            diagram.model.setDataProperty(monitorData, 'values', updatedValues);
        }
    });
};