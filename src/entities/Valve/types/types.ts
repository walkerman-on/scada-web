export interface IValves {
    title: string
    facilityId: string,
    id: string,
}

export interface IValveState {
    list: IValves[],
    error: string | null,
    loading: boolean,
    currentValve?: IValves
}