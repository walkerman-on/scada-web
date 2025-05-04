// src/scada/ScadaApp.tsx
import React, { useEffect, useRef } from 'react';
import * as go from 'gojs';
import { setupDiagram } from './utils/diagramConfig';
import { createModel } from './utils/dataModel';
import { handleWebSocketMessage } from './utils/wsHandler';
import { useWebSocket } from 'shared/api/ws/hooks/useWebSocket';
import cl from './ScadaApp.module.scss'

export const ScadaApp: React.FC = () => {
    const diagramRef = useRef<HTMLDivElement>(null);
    const { lastMessage } = useWebSocket();

    const handleSetpoint = async (data: number) => {
        try {
            const response = await fetch('http://localhost:3000/api/regulators/setpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    param: 'level',
                    setpoint: data
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Setpoint updated successfully:', result);
            return result;
        } catch (error) {
            console.error('Error updating setpoint:', error);
            throw error;
        }
    }

    useEffect(() => {
        if (!diagramRef.current) return;

        const diagram = setupDiagram(diagramRef.current);
        diagram.model = createModel();

        const handleTextEdited = async (e: go.DiagramEvent) => {
            const tb = e.subject as go.TextBlock;
            const panelItem = tb.panel?.panel?.data;

            if (panelItem?.label === 'SP') {
                try {
                    await handleSetpoint(Number(tb.text));
                    console.log('Новое значение SP:', tb.text);
                } catch (error) {
                    console.error('Ошибка при обновлении SP:', error);
                }
            }
        };

        diagram.addDiagramListener('TextEdited', handleTextEdited);

        return () => {
            diagram.clear();
        };
    }, []);

    useEffect(() => {
        if (!diagramRef.current) return;
        const diagram = go.Diagram.fromDiv(diagramRef.current);
        if (!diagram) return;

        handleWebSocketMessage(diagram, lastMessage);
    }, [lastMessage]);

    return (
        <div id="scada-container" style={{ width: '100%', height: '100%' }} >
            <div className={cl.license}></div>
            <div ref={diagramRef} style={{
                backgroundColor: 'var(--bg-color)',
                height: '100%'
            }}></div>
        </div>
    );
};