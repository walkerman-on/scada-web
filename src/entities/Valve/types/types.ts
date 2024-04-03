export interface IValve {
    valve: {
        title: string
        facilityId: string,
        id: string,
    }
    parameters: {
        pressure?: IParameter;
        flow?: IParameter;
        pressureDrop?: IParameter;
        temperature?: IParameter;
        valveOpening: IParameter;
    }
}

export interface IValveMainInfo {
    title: string
    facilityId: string,
    id: string,
}

interface IParameter {
    id: string;
    title: string;
    unit: string;
    value: number;
    name: string
}

export interface IValveState {
    list: IValveMainInfo[],
    error: string | null,
    loading: boolean,
    currentValve: IValve[]
}
