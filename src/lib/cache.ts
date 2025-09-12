import fs from 'fs';
import path from 'path';

const CACHE_DIR = path.join(process.cwd(), 'public', 'cache');

// 캐시 디렉토리 생성
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

export function getCacheKey(symbol: string, startDate: string, endDate: string): string {
  return `${symbol}_${startDate}_${endDate}.json`;
}

export function getCachedData(cacheKey: string): any | null {
  try {
    const filePath = path.join(CACHE_DIR, cacheKey);
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error('Error reading cache:', error);
    return null;
  }
}

export function setCachedData(cacheKey: string, data: any): void {
  try {
    const filePath = path.join(CACHE_DIR, cacheKey);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing cache:', error);
  }
}