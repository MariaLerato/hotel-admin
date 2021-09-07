import { Chart } from 'chart.js';
import React,{Fragment, useState} from 'react'

const Form = () =>{
    

    const initialState = {
        dailyData:[
            {
                activity:"",
                timeSpent:0,
            },
        ],
        chartLabels:[],
        chartDara:[],
        chartColot:[]
    };
    const  [state,setState] = useState(initialState);
    const onChange = (e,index) =>{
        let {name,value} = e.target;
        let updatedState = [...state.dailyData];
        updatedState[index][name] = value
        setState((previousState)=>{
            return{
                ...previousState,
                dailyData:[...updatedState],
            };
        });
    };
    const addExtraField = (e) =>{
        let extraActivity =[
            ...state.dailyData,
            {
                activity:" ",
                timeSpent:0,
            },
        ];
        setState((previousState)=>{
            return {
                ...previousState,
                dailyData:[...extraActivity],
            };
        });
    };
    const onSubmit=(e) =>{
        e.preventDefault();
        let chartLabels = state.dailyData.map((data)=>{
            return data.activity;
        })
        .filter((e)=>e);
        let chartData = state.dailyData.map((data)=>{return parseInt(data.timeSpent);})
        .filter((e)=>e)
        setState((previousState)=>{
            return{
                ...previousState,
                chartDara:chartData,
                chartLabels:chartLabels,
            };
        });
    };
    return(
        <>
        <ul>
            {state.dailyData.map((data, index)=>(
                <Fragment key={index}>
                    <div className="row">
                        <div className="col">
                            <input type="text"
                            name="activity"
                            value={data.activity}
                            className="form-control"
                            onChange={(e)=> onChange(e,index)}
                            placeholder="Activity" />
                        </div>
                        <div className="col">
                            <input type="number"
                            name="timespent"
                            value={data.timeSpent}
                            className="form-control"
                            onChange={(e)=> onChange(e,index)}
                            placeholder="Time spent"/>
                        </div>
                        <button
                        type="button"
                        style={{marginRight:"25px"}}
                        name="addNew"
                        onClick={addExtraField}
                        className="btn btn-outline-success">Add Activity</button>
                    </div>
                    <br />
                    {state.chartDara.length && state.chartLabels.length ? (
                        <Chart {...state} />
                    ): null}
                    )
                </Fragment>
            ))}
        </ul>
        </>
    )
}
export default Form