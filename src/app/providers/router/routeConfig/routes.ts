export const getLogin = () => '/login';
export const getRegister = () => '/register';
export const getMain = () => '/';
export const getNotFound = () => '*';

export const getScada = (factoryId?: number, facilityIdByFactoryId?: number) => `/scada/factory/${factoryId}/facility/${facilityIdByFactoryId}`;

export const getAccount = () => `${getScada()}/account`;
export const getInfographics = () => `${getScada()}/infographics`;
export const getTest = () => `${getScada()}/test`;
export const getObject = (id?: number) => (id ? `${getScada()}/facility/${id}` : `${getScada()}/object`);
