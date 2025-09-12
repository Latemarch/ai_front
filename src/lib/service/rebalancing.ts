import { ca, te, th } from "date-fns/locale";

interface YFCandleStick {
  adjClose: number;
  close: number;
  date: string;
  high: number;
  low: number;
  open: number;
  volume: number;
}

type StockInfo = {
  symbol: string;
  historicalData: YFCandleStick[];
  portion: number;
};

type DrawdownFromPeak = {
  origin: YFCandleStick[];
  target: YFCandleStick[];
  thresholds: number[];
};
export function drawdownFromPeak({
  origin,
  target,
  thresholds,
}: DrawdownFromPeak) {
  console.log("origin", origin[0], thresholds);
  const rebalancingPotins = calculateRebalancingPoints(origin, thresholds);
  console.log("Rebalancing Points: ", rebalancingPotins);
  return rebalancingPotins;
}

export function calculateRebalancingPoints(
  historicalData: YFCandleStick[],
  thresholds: number[]
) {
  const rebalancingPoints: any[] = [];
  thresholds.sort((a, b) => b - a);
  let tempThresholds = [...thresholds];

  let globalPeak = -Infinity;

  historicalData.forEach((data) => {
    if (data.close > globalPeak) {
      globalPeak = data.close;
      if (tempThresholds.length === thresholds.length) return;
      tempThresholds = [...thresholds];
      rebalancingPoints.push(
        "Done" + new Date(data.date).toISOString().split("T")[0]
      );
    } else {
      const drawdown = (globalPeak - data.close) / globalPeak;
      if (drawdown >= tempThresholds[0]) {
        tempThresholds.shift();

        const unixTimestamp = new Date(data.date).toISOString().split("T")[0];
        rebalancingPoints.push(unixTimestamp);
      }
    }
  });

  return rebalancingPoints;
}
