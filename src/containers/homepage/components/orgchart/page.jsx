'use client'
import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import {OrgChart} from 'd3-org-chart';


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
            .nodeContent(function (d, i, arr, state) {
                const color = '#FFFFFF';
                const imageDiffVert = 25 + 2;
                return `
                <div style='width:${
                    d.width
                }px;height:${d.height}px;padding-top:${imageDiffVert - 2}px;padding-left:1px;padding-right:1px'>
                        <div style="font-family: 'Inter', sans-serif;background-color:${color};  margin-left:-1px;width:${d.width - 2}px;height:${d.height - imageDiffVert}px;border-radius:10px;border: 1px solid #E4E2E9">
                            <div style="display:flex;justify-content:flex-end;margin-top:5px;margin-right:8px">#${
                    d.data.id
                }</div>
                            <div style="background-color:${color};margin-top:${-imageDiffVert - 20}px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;" ></div>
                            <div style="margin-top:${
                    -imageDiffVert - 20
                }px;">   <img src=" ${d.data.image}" style="margin-left:${20}px;border-radius:100px;width:40px;height:40px;" /></div>
                            <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:10px">  ${
                    d.data.name
                } </div>
                            <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;"> ${
                    d.data.position
                } </div>

                        </div>
                    </div>
                            `;
            })

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