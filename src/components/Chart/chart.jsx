import React from "react";
import { Chart } from "chart.js";
import { ProgressPlugin } from "webpack";

class Chart extends Component {
    // state = {  }
    constructor(props)
    render() { 
        return ( 
            <Bar 
            data={{
                labels:props.chartLabels,
                datasets:[
                    {
                        data:props.chartData,
                        label:"Activity",
                        borderColor:"#3333ff",
                        fill:true,
                        backgroundColor:colorPicker.map(()=>
                        colorPicker[Math.round(Math.random() * 2)])
                    }
                ]
            }}
            />
         );
    }
}
export default Chart
 
