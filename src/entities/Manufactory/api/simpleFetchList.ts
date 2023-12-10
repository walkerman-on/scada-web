import { $api } from 'shared/API/api';

export const simpleFetchList = async () => {
  try {
    const response = await $api.get(`/manufactory`);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
