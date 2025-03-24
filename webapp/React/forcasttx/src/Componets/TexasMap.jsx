import React, { useEffect, useRef } from "react";
import * as d3 from "d3";


const TexasMap = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 800;
    const height = 500;

    // Define a projection for Texas
    const projection = d3.geoMercator()
      .scale(1500) // Adjust scale
      .center([-99.5, 31]) // Approx. center of Texas
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    // Select the SVG
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // ✅ Correct path to GeoJSON file
    d3.json("../texas.geojson").then(geoData => {
      console.log("Loaded GeoJSON:", geoData); // Debugging

      svg.selectAll("path")
        .data(geoData.features)
        .join("path")
        .attr("d", pathGenerator)
        .attr("fill", "lightblue")
        .attr("stroke", "black")
        .attr("stroke-width", 2);
    }).catch(error => console.error("Error loading GeoJSON:", error));
  }, []);

  return <svg ref={svgRef} style={{ background: "lightgray" }}></svg>;
};

export default TexasMap;
