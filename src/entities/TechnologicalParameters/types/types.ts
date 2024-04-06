export interface IParameterInfo {
    title?: string,
    id?: string,
    unit?: string,
    value?: number,
    name?: string
}

export interface IParameters {
    pressure?: IParameterInfo;
    flow?: IParameterInfo;
    pressureDrop?: IParameterInfo;
    temperature?: IParameterInfo;
    valveOpening: IParameterInfo;
    collapsedPositionX?: number,
    collapsedPositionY?: number,
    expandedPositionX?: number,
    expandedPositionY?: number,
}

export interface IParameterState {
    list: IParameters[],
    error: string | null,
    loading: boolean,
}