"use client";

import * as React from "react";
import * as d3 from "d3";

type DataPoint = {
  x: number;
  y: number;
};

type Props = {
  data?: DataPoint[];
  width?: number;
  height?: number;
};

const defaultData: DataPoint[] = [
  { x: 0, y: 10 },
  { x: 1, y: 15 },
  { x: 2, y: 8 },
  { x: 3, y: 20 },
  { x: 4, y: 12 },
  { x: 5, y: 25 },
  { x: 6, y: 18 },
];

export default function LineChart({
  data = defaultData,
  width = 400,
  height = 200,
}: Props) {
  const svgRef = React.useRef<SVGSVGElement | null>(null);

  React.useEffect(() => {
    if (!svgRef.current || !data.length) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg
      .attr("class", "border border-gray-300")
      .attr("viewBox", `0 0 ${width} ${height}`);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.x) as [number, number])
      .range([0, innerWidth]);

    const y = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.y) as [number, number])
      .range([innerHeight, 0]);

    const line = d3
      .line<DataPoint>()
      .x((d) => x(d.x))
      .y((d) => y(d.y))
      .curve(d3.curveMonotoneX);

    const xAxis = g
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x));

    g.append("g").call(d3.axisLeft(y));

    const linePath = g
      .append("path")
      .datum(data)
      .attr("class", "line-path")
      .attr("fill", "none")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 2)
      .attr("d", line);

    const handleZoom = (event: any) => {
      const rescaledX = event.transform.rescaleX(x);

      // x축 업데이트
      xAxis.call(d3.axisBottom(rescaledX));

      // 라인 path 업데이트 (x축만)
      const newLine = d3
        .line<DataPoint>()
        .x((d) => rescaledX(d.x))
        .y((d) => y(d.y))
        .curve(d3.curveMonotoneX);

      linePath.attr("d", newLine);
    };

    // const zoom = d3
    //   .zoom()
    //   .on("zoom", handleZoom);
    // svg.call(zoom as any);
  }, [data, width, height]);

  return <svg ref={svgRef}></svg>;
}
