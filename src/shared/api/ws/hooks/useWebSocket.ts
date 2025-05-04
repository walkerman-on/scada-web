import { useEffect, useRef, useState } from "react";

interface WebSocketMessage {
    nodeId: string;
    value: number;
    unit?: string;
    timestamp: string;
    [key: string]: any; // для дополнительных полей
}

export const useWebSocket = () => {
    const url = 'ws://localhost:8080';
    const socketRef = useRef<WebSocket | null>(null);
    const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const socket = new WebSocket(url);
        socketRef.current = socket;

        socket.onopen = () => {
            console.log("Соединение установлено");
            setIsConnected(true);
        };

        socket.onmessage = (e) => {
            try {
                const message = JSON.parse(e.data) as WebSocketMessage;
                setLastMessage(message);
            } catch (error) {
                console.error("Ошибка парсинга сообщения", error);
            }
        };

        socket.onclose = () => {
            console.log("Соединение закрыто");
            setIsConnected(false);
        };

        socket.onerror = (error) => {
            console.log("Произошла ошибка", error);
        };

        return () => {
            socket.close();
        };
    }, [url]);

    const sendMessage = (data: any) => {
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.send(JSON.stringify(data));
        } else {
            console.warn("WebSocket не подключен");
        }
    };

    return {
        lastMessage,
        sendMessage,
        isConnected,
    };
};