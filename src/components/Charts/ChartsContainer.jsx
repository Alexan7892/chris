import React from 'react';
import Charts from "./Charts";
import {connect} from "react-redux";
import {showmore, showless, setChart} from "../../redux/charts-reducer";

debugger;
let mapStateToProps = (state) => {
    return {
        charts: state.chartsPage.charts
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         showmore: (id) => {
//             dispatch(showmore(id));
//         },
//         showless: (id) => {
//             dispatch(showless(id));
//         },
//         setChart: (charts) => {
//             dispatch(setChart(charts));
//         }
//     }
// }

export default connect(mapStateToProps, {showmore, showless,setChart})(Charts);