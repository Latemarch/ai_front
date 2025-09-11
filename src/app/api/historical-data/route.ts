import { NextRequest, NextResponse } from 'next/server';
import yahooFinance from 'yahoo-finance2';

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

    const queryOptions = {
      period1: new Date(defaultStartDate),
      period2: new Date(defaultEndDate),
      interval: '1d' as const,
    };

    console.log(`Fetching ${symbol} data from ${defaultStartDate} to ${defaultEndDate}...`);
    
    const result = await yahooFinance.historical(symbol, queryOptions);
    
    const sortedData = result.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    return NextResponse.json({
      success: true,
      symbol,
      startDate: defaultStartDate,
      endDate: defaultEndDate,
      count: sortedData.length,
      data: sortedData
    });

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