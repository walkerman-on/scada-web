export const getLogin = () => '/login';
export const getRegister = () => '/register';
export const getMain = () => '/';
export const getNotFound = () => '*';

export const getScada = (factoryId?: number, facilityIdByFactoryId?: number) => `/scada/factory/${factoryId}/facility/${facilityIdByFactoryId}`;
export const getFacility = (facilityId?: number, factoryId?: number) => (facilityId && factoryId ? `${`/scada/factory/${factoryId}/facility/${facilityId}`}` : `${getScada()}/facility`);

export const getAccount = () => `${getScada()}/account`;
export const getInfographics = () => `${getFacility()}/infographics`;
export const getTest = () => `${getFacility()}/test`;
