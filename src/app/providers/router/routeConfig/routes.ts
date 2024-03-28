import { IGetPath } from "./types";

export const getLogin = () => '/login';
export const getRegister = () => '/register';
export const getMain = () => '/';
export const getNotFound = () => '*';

export const getFacility: IGetPath = (factoryKey, facilityId) => `/${factoryKey}/facility_ID/${facilityId}`;

export const getAccount = (userId: string) => `/user/${userId}`;
export const getInfographics: IGetPath = (factoryKey, facilityId) => `${getFacility(factoryKey, facilityId)}/infographics`;
export const getTest: IGetPath = (factoryKey, facilityId) => `${getFacility(factoryKey, facilityId)}/description`;
