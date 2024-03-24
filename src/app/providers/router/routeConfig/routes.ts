export const getLogin = () => '/login';
export const getRegister = () => '/register';
export const getMain = () => '/';
export const getNotFound = () => '*';

export const getScada = (factoryKey ?: string , facilityIdByFactoryId?: number) => `/${factoryKey}/facility_ID/${facilityIdByFactoryId}`;
export const getFacility = (facilityId?: number, factoryKey?: string) => (facilityId && factoryKey ? `${`/${factoryKey}/facility_ID/${facilityId}`}` : `${getScada()}/facility`);

export const getAccount = () => `${getScada()}/account`;
export const getInfographics = () => `${getFacility()}/infographics`;
export const getTest = () => `${getFacility()}/test`;
