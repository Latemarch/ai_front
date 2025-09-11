type stockInfo = {
  symbol: string;
  historicalDaata: any;
  portion: number;
};
type DrawdownFromPeak = {
  origin: stockInfo;
  target: stockInfo;
  rebalancingPotins: number[];
};
export function drawdownFromPeak({
  origin,
  target,
  rebalancingPotins,
}: DrawdownFromPeak) {}
