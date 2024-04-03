export interface IFacility {
    id: number,
    title: string,
    description: string,
    enabled?: boolean,
    visible?: boolean,
    factoryId: string,
    schemeDarkURL: string,
    schemeLightURL: string,
}

export interface IFacilityMainInfo {
    id: string,
    title: string,
    factoryId: number,
    enabled?: boolean,
    visible?: boolean,
}

export interface IFacilityState {
    list: IFacilityMainInfo[],
    error: string | null,
    loading: boolean,
    currentFacility?: IFacility,
}