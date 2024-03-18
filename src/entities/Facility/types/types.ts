export interface IFacility {
    id: number,
    title: string,
    description: string,
    enabled?: boolean,
    visible?: boolean
    technologicalParameters: []
}

export interface IFacilityState {
    list: IFacility[],
    error: string | null,
    loading: boolean
}

export interface IParametrs {

}