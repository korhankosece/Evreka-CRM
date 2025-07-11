import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';

export const API_BASE_URL = '/api';

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export class BaseService {
  private api: AxiosInstance;

  constructor(baseURL: string = API_BASE_URL) {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.api.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.api.interceptors.response.use(
      (response) => response,
      (error: AxiosError<ApiError>) => {
        return Promise.reject(this.handleError(error));
      }
    );
  }

  // Error handler
  private handleError(error: AxiosError<ApiError>): ApiError {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        message: error.response.data?.message || 'An error occurred',
        status: error.response.status,
        code: error.response.data?.code,
      };
    } else if (error.request) {
      // The request was made but no response was received
      return {
        message: 'No response from server',
        status: 503,
        code: 'SERVICE_UNAVAILABLE',
      };
    } else {
      // Something happened in setting up the request
      return {
        message: error.message || 'An unexpected error occurred',
        code: 'UNKNOWN_ERROR',
      };
    }
  }

  protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.get<ApiResponse<T>>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  protected async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.post<ApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  protected async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.delete<ApiResponse<T>>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  protected async getPaginated<T>(
    url: string,
    page: number = 1,
    perPage: number = 10,
    config?: AxiosRequestConfig
  ): Promise<
    ApiResponse<{
      users: T[];
      total: number;
      totalPages: number;
      currentPage: number;
      perPage: number;
    }>
  > {
    const params = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
    });

    return this.get(`${url}?${params}`, { ...config, params: { ...config?.params } });
  }
}
