export interface IParameter {
    title: string,
    id: string,
    unit: string,
    value: number
}

export interface IParameterState {
    list: IParameter[],
    // currentValve: IParameter,
    error: string | null,
    loading: boolean,
}