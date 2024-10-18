import axios, { AxiosInstance } from 'axios';
import { companies } from './mockData';
import { Company } from '../types/company';

class SomeApi {
  private readonly baseUrl: string =
    'https://aqueous-beyond-50648.herokuapp.com';
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getCompanies(): Promise<Company[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(companies);
      }, 4000);
    });
  }
}

const someApi = new SomeApi();

export default someApi;
