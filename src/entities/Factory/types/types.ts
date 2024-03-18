export interface IFactory {
    id: number,
    key: string,
    title: string,
    enabled?: boolean,
    visible?: boolean
}

export interface IFactoryState {
    list: IFactory[],
    error: string | null,
    loading: boolean,
    currentFactory?: IFactory,
}
