import { useMutation } from '@tanstack/react-query';
import api from '@/lib/axios';

export interface HistoricalDataRequest {
  symbol: string;
  startDate?: string;
  endDate?: string;
}

export interface HistoricalDataPoint {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  adjClose: number;
}

export interface HistoricalDataResponse {
  success: boolean;
  symbol: string;
  startDate: string;
  endDate: string;
  count: number;
  data: HistoricalDataPoint[];
  error?: string;
}

export function useHistoricalData() {
  return useMutation<HistoricalDataResponse, Error, HistoricalDataRequest>({
    mutationFn: async (params: HistoricalDataRequest) => {
      const response = await api.post<HistoricalDataResponse>('/historical-data', params);
      
      if (!response.data.success) {
        throw new Error(response.data.error || 'Failed to fetch historical data');
      }
      
      return response.data;
    },
  });
}