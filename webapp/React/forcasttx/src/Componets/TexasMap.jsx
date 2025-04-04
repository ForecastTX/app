import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const TexasMap = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 600;
    const height = 400;

    // Create projection for Texas
    const projection = d3.geoMercator()
      .scale(1050) // Adjust scale for better fit
      .center([-99.5, 31]) // Center on Texas
      .translate([width / 2, height / 2]);

    const pathGenerator = d3.geoPath().projection(projection);

    // Select the SVG
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Load GeoJSON and render map
    d3.json("/Texas.json")
      .then(geoData => {
        console.log("Loaded GeoJSON:", geoData); 


        svg.selectAll("*").remove();

        // Draw Texas map
        svg.selectAll("path")
          .data(geoData.features)
          .join("path")
          .attr("d", pathGenerator)
          .attr("fill", "#FFFFFF") 
          .attr("stroke", "black")
          .attr("stroke-width", 3)
          // Add mouseover and mouseout interactions
          .on("mouseover", function(event, d) {
            // Change color on hover
            d3.select(this).attr("fill", "#FF6347"); // Change color to tomato

            // Show tooltip on hover
            const tooltip = d3.select("#tooltip")
              .style("visibility", "visible")
              .style("top", `${event.pageY + 10}px`) // Position the tooltip near the mouse cursor
              .style("left", `${event.pageX + 10}px`)
              .text(d.properties.name); // Show region name (assuming "name" is the field)
          })
          .on("mouseout", function(event, d) {
            // Reset color on mouse out
            d3.select(this).attr("fill", "#FFFFFF");

            // Hide the tooltip
            d3.select("#tooltip").style("visibility", "hidden");
          });
      })
      .catch(error => console.error("Error loading GeoJSON:", error));
  }, []);

  return (
    <>
      <svg ref={svgRef} style={{ background: "white", display: "block", margin: "auto" }}></svg>
      <div
        id="tooltip"
        style={{
          position: "absolute",
          visibility: "hidden",
          backgroundColor: "#fff",
          border: "1px solid #000",
          padding: "5px",
          borderRadius: "4px",
          pointerEvents: "none", // Prevent the tooltip from blocking interactions
        }}
      ></div>
    </>
  );
};

export default TexasMap;
