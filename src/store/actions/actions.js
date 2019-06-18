
import axios from "axios";

export const IncNumberAsync = () =>{
    return{
        type: "ON_INC",value:1
    }
}


//for thunk
export const IncNumber = () =>{
    return dispatch => {
        setTimeout(() => {
            dispatch (IncNumberAsync())
        }, 2000);
    }
}



export const DecNumber = () =>{
    return{
        type: "ON_DEC", value:1
    }
}



export const onLogOut = () =>{
    return{
        type: "ON_LOGOUT"
    }
}

export const onNameChange = (event) =>{
    return{
        type: "NAME_CHANGE", nameValue: event.target.value
    }
}

export const onPassChange = (event) =>{
    return{
        type: "PASS_CHANGE", passValue: event.target.value 
    }
}


export const onLogIn = () =>{
    return{
        type:"ON_LOG_IN"
    }
}


export function loadAgGridData(){
    return(dispatch)=>{
        return axios.get("../json_files/test.json")
                    .then((response)=>{
                        dispatch(agGridData(response.data))
                    })
    }
}

export function agGridData(gridData){
  return{
        type:"AG_GRID_DATA",
        payload:gridData
    }
}



export function loadPiChartData(){
    return(dispatch)=>{
        return axios.get("../json_files/pichart.json")
                    .then((response)=>{
                        dispatch(piChartData(response.data))
                    })
    }
}


export function piChartData(pichartData){
    return{
          type:"PI_CHART_DATA",
          payload:pichartData
      }
  }


export function loadbarChartData(){
    return(dispatch)=>{
        return axios.get("../json_files/barchart.json")
                    .then((response)=>{
                        dispatch(barChartData(response.data))
                    })
    }
}


export function barChartData(barchartData){
    return{
          type:"BAR_CHART_DATA",
          payload:barchartData
      }
  }


export function loadlineChartData(){
    return(dispatch)=>{
        return axios.get("../json_files/linechart.json")
                    .then((response)=>{
                        dispatch(lineChartData(response.data))
                    })
    }
}


export function lineChartData(linechartData){
    return{
          type:"LINE_CHART_DATA",
          payload:linechartData
      }
  }

export function loadradarChartData(){
    return(dispatch)=>{
        return axios.get("../json_files/radarchart.json")
                    .then((response)=>{
                        dispatch(radarChartData(response.data))
                    })
    }
}


export function radarChartData(radarchartData){
    return{
          type:"RADAR_CHART_DATA",
          payload:radarchartData
      }
  }
