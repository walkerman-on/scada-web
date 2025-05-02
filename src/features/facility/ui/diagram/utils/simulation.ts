import * as go from 'gojs';

export const startSimulation = (diagram: go.Diagram) => {
    const roundAndFloor = (num: number, decimalPlaces = 0) => {
        num = Math.round(Number(num + 'e' + decimalPlaces));
        return Math.max(Number(num + 'e' + -decimalPlaces), 0);
    };

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    const updateSensors = () => {
        diagram.commit(() => {
            const sensorNode = diagram.findNodeForKey('level');
            if (sensorNode) {
                const d = sensorNode.data;
                diagram.model.setDataProperty(
                    d,
                    'value',
                    roundAndFloor(parseFloat(d.value) + random(-0.5, 0.55), 1).toString()
                );
            }
        });
    };

    const intervalId = setInterval(updateSensors, 550);

    return () => clearInterval(intervalId);
};