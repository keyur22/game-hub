import axios, { AxiosRequestConfig } from 'axios';

export interface Response<T> {
  count: number;
  results: T[];
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '889ed9e2a0724453ad0520b81bd42c47'
  }
});

class APIClient<T> {
  endpoint;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<Response<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
