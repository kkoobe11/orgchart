import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { OrgChart } from 'd3-org-chart';


const OrgChartContainer = () => {

    const chartContainerRef = useRef(null);

    useEffect(() => {
        if (!chartContainerRef.current) {
            return;
        }

        const chart = new OrgChart()
            .container('.chart-container') // Specify the container where the chart will be rendered
            .data([]) // Initialize with empty data; will be set after fetching
            .nodeWidth((d) => 220) // Set the width of each node
            .nodeHeight((d) => 150) // Set the height of each node
            .childrenMargin((d) => 40) // Set the margin between child nodes
            .compactMarginBetween((d) => 15) // Set the margin between nodes when compacted
            .compactMarginPair((d) => 30) // Set the margin between node pairs when compacted
            .nodeContent((d, i, arr, state) => {
                // Custom HTML content for each node
                return `
                    <div style='width:${d.width}px;height:${d.height}px;'>
                        <div style="height:100%;border: 1px solid #E4E2E9;border-radius: 5px;overflow: hidden;">
                            <div style="height: 20px;background-color: #333;color: #fff;text-align: center;line-height: 20px;">${d.data.name}</div>
                            <div style="padding: 10px;">
                                <img src="${d.data.image}" style="width: 50px;height: 50px;border-radius: 50%;margin-right: 10px;">
                                <span>${d.data.position}</span>
                            </div>
                        </div>
                    </div>
                `;
            });

        // Fetch the data and render the chart
        d3.csv('https://raw.githubusercontent.com/bumbeishvili/sample-data/main/data-oracle.csv').then(data => {
            chart
                .data(data) // Set the data for the chart
                .render(); // Render the chart
        });

    }, []);

    const handleCaptureClick = () => {
        if (chartContainerRef.current) {
            captureScreenshot(chartContainerRef.current);
        }
    };

    return <div ref={chartContainerRef} className="chart-container" style={{width: '100%', height: '100%'}}></div>;
};

export default OrgChartContainer;