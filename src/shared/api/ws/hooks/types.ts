export type MessageHandler = (event: MessageEvent) => void;

export interface UseWebSocketOptions {
    onOpen?: () => void;
    onClose?: () => void;
    onError?: (error: Event) => void;
    onMessage?: MessageHandler;
    reconnectInterval?: number; // milliseconds
    shouldReconnect?: boolean;
}