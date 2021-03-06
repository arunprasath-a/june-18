import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadPiChartData } from "../../store/actions/actions";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);



class PiChart extends React.Component {

    // constructor(props){
    //     super(props)
    //     this.state={
    //         data:[{
    //             "country": "Lithuania",
    //             "litres": 501.9
    //         }, {
    //             "country": "Czech Republic",
    //             "litres": 301.9
    //         }, {
    //             "country": "Ireland",
    //             "litres": 201.1
    //         }, {
    //             "country": "Germany",
    //             "litres": 165.8
    //         }, {
    //             "country": "Australia",
    //             "litres": 139.9
    //         }, {
    //             "country": "Austria",
    //             "litres": 128.3
    //         }, {
    //             "country": "UK",
    //             "litres": 99
    //         }, {
    //             "country": "Belgium",
    //             "litres": 60
    //         }, {
    //             "country": "The Netherlands",
    //             "litres": 50
    //         }]
    //     }


    // }


    componentDidMount() {
        this.props.loadPiChartData();
        // var chart = am4core.create("Pichartdiv", am4charts.PieChart);
        // chart.data= this.state.data;

        // var pieSeries = chart.series.push(new am4charts.PieSeries());
        // pieSeries.dataFields.value = "litres";
        // pieSeries.dataFields.category = "country";
        // console.log(this.props.data)

    }

    componentDidUpdate() {
        var chart = am4core.create("Pichartdiv", am4charts.PieChart);
        chart.data = this.props.data.data;

        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";

    }





    render() {



        return (
            <React.Fragment>
                <div className="pi">


                    <div className="Pichartdiv"></div>
                    <br></br>
                    <br></br>
                    <h3>pi chart</h3>
                </div>

            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.mainReducer.pichartData
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadPiChartData: loadPiChartData
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(PiChart);