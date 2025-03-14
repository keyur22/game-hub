import axios from 'axios';

export interface Response<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '889ed9e2a0724453ad0520b81bd42c47'
  }
});
