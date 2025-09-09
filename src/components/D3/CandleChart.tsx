"use client";

import * as React from "react";
import * as d3 from "d3";

type Props = {
  width?: number;
  height?: number;
};

export default function CandleChart({ width = 400, height = 200 }: Props) {
  const svgRef = React.useRef<SVGSVGElement | null>(null);

  React.useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous contents

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg
      .attr("width", width)
      .attr("height", height)
      .attr("class", "border border-gray-300")
      .attr("viewBox", `0 0 ${width} ${height}`);

    // Create main group for chart content
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
  }, [width, height]);

  return <svg ref={svgRef}></svg>;
}
