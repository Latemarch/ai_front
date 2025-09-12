import { NextRequest, NextResponse } from 'next/server';
import yahooFinance from 'yahoo-finance2';
import { getCacheKey, getCachedData, setCachedData } from '@/lib/cache';

export async function POST(request: NextRequest) {
  try {
    const { symbol, startDate, endDate } = await request.json();
    
    if (!symbol) {
      return NextResponse.json(
        { error: 'Symbol is required' },
        { status: 400 }
      );
    }

    const defaultStartDate = startDate || '2010-01-01';
    const defaultEndDate = endDate || '2024-12-31';

    // 캐시 확인
    const cacheKey = getCacheKey(symbol, defaultStartDate, defaultEndDate);
    const cachedData = getCachedData(cacheKey);
    
    if (cachedData) {
      console.log(`Returning cached data for ${symbol} from ${defaultStartDate} to ${defaultEndDate}`);
      return NextResponse.json(cachedData);
    }

    const queryOptions = {
      period1: new Date(defaultStartDate),
      period2: new Date(defaultEndDate),
      interval: '1d' as const,
    };

    console.log(`Fetching ${symbol} data from ${defaultStartDate} to ${defaultEndDate}...`);
    
    const result = await yahooFinance.chart(symbol, queryOptions);
    
    const sortedData = result.quotes.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    const responseData = {
      success: true,
      symbol,
      startDate: defaultStartDate,
      endDate: defaultEndDate,
      count: sortedData.length,
      data: sortedData
    };

    // 캐시에 저장
    setCachedData(cacheKey, responseData);

    return NextResponse.json(responseData);

  } catch (error) {
    console.error('Error fetching historical data:', error);
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch historical data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}