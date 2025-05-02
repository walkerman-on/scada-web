import React, { useEffect, useRef } from 'react';
import * as go from 'gojs';
import { setupDiagram } from './utils/diagramConfig';
import { createModel } from './utils/dataModel';
import { startSimulation } from './utils/simulation';

export const ScadaApp: React.FC = () => {
    const diagramRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!diagramRef.current) return;

        // Инициализация диаграммы
        const diagram = setupDiagram(diagramRef.current);

        // Загрузка модели данных
        diagram.model = createModel();

        // Запуск симуляции
        const cleanupSimulation = startSimulation(diagram);

        return () => {
            cleanupSimulation();
            diagram.clear();
        };
    }, []);

    return (
        <div id="scada-container" style={{ width: '100%', height: '100%' }}>
            <div ref={diagramRef} style={{
                backgroundColor: 'var(--bg-color)',
                height: '100%'
            }}></div>
        </div>
    );
};