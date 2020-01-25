import axios, { AxiosResponse } from 'axios';

interface ApiAdapterTypes {
  get: (url: string) => Promise<AxiosResponse<string>>;
}

export const apiAdapter: ApiAdapterTypes = {
  get(url: string) {
    return axios.get(url);
  },
};
