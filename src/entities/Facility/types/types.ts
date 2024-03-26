export interface IFacility {
    id: number,
    title: string,
    description: string,
    enabled?: boolean,
    visible?: boolean,
    factoryId: number,
    schemeDarkURL: string,
    schemeLightURL: string,
    technologicalParameters: []
}

export interface IFacilityState {
    list: IFacility[],
    error: string | null,
    loading: boolean,
    currentFacility?: IFacility
}

export interface IParametrs {

}