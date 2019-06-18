

const initialState = {
    userName: "",
    password: "",
    counter: 0,
    headerData:[],
    rowData:[],
    defaultColDef:[],
    loading:true,
    pichartData:[],
    barchartData:[],
    linechartData:[],
    radarchartData:[]
}





const reducer = (state = initialState, action) => {


    const newState = { ...state };


    switch (action.type) {
        case "NAME_CHANGE":
            return Object.assign({}, newState, { userName: action.nameValue });

        case "PASS_CHANGE":
            return Object.assign({}, newState, { password: action.passValue });

        case "ON_INC":
            return Object.assign({}, newState, { counter: newState.counter + action.value });

        case "ON_DEC":
            return Object.assign({}, newState, { counter: newState.counter - action.value });

        case "ON_LOGOUT":
            return Object.assign({}, newState, { userName: "", password: "" })

        case "AG_GRID_DATA":
            return Object.assign({}, newState, { headerData: action.payload[0].columnDefs, 
                                                 rowData: action.payload[0].rowData,
                                             })
        case "PI_CHART_DATA":
           return Object.assign({}, newState, { pichartData: action.payload })

        case "BAR_CHART_DATA":
           return Object.assign({}, newState, { barchartData: action.payload })

        case "LINE_CHART_DATA":
           return Object.assign({}, newState, { linechartData: action.payload })

        case "RADAR_CHART_DATA":
           return Object.assign({}, newState, { radarchartData: action.payload })

        default:
            return newState;

    }

}

export default reducer;