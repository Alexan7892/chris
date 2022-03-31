import React from 'react';
import Charts from "./Charts";
import {connect} from "react-redux";
import {showmore, showless, setChart} from "../../redux/charts-reducer";
import axios from "axios";

class ChartsContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://sym/api/charts_datas.json?page=1`)
            .then(response => {
                let dd = [
                    {
                        id: 1,
                        name: 'Chat1',
                        caption: 'Посещаете ли вы Церковь(Храм, Костел)?',
                        clicked: true,
                        tips: ['Да', 'Нет', 'Очень редко'],
                        backgroundColor: ['rgba(56, 245, 56, 0.37)','rgba(255, 97, 97, 0.37)', 'rgba(13,125,246,0.37)'],
                        data: [{
                            idc: 1,
                            name: 'Православиe',
                            value: ['15', '80', '5'],
                            count : 200
                        }, {
                            idc: 2, name: 'Католицизм', value: ['10', '83', '7'],
                            count : 300
                        }, {idc: 3, name: 'Протестантизм',
                            value: ['48', '50', '2'], count: 400}]
                    },
                    {
                        id: 2,
                        name: 'Chart2',
                        caption: 'Читаете ли вы Библию?',
                        clicked: true,
                        tips: ['Да','Нет','Очень редко'],
                        backgroundColor: ['rgba(56, 245, 56, 0.37)','rgba(255, 97, 97, 0.37)', 'rgba(13,125,246,0.37)'],
                        data: [{
                            idc: 1,
                            name: 'Православиe',
                            count: 100,
                            value: ['15','80','5'],
                            borderColor: 'rgba(255, 99, 132, 1)'
                        }, {idc: 2, name: 'Католицизм', value: ['10','83','7'],borderColor: 'rgba(54, 162, 235, 1)', count: 200
                        }, {idc: 3, name: 'Протестантизм', value: ['48','50','2'],borderColor: 'rgba(153, 102, 255, 1), count: 300'}]
                    }
                ];
                this.props.setChart(dd);
            });
    }

    // onPageChanged = (pageNumber) => {
    //     this.props.setCurrentPage(pageNumber);
    //     this.props.toggleIsFetching(true);
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.props.toggleIsFetching(false);
    //             this.props.setUsers(response.data.items);
    //         });
    // }

    render() {
        return <>
            <Charts  charts = {this.props.charts}/>
            />
        </>
    }
}
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

export default connect(mapStateToProps, {showmore, showless,setChart})(ChartsContainer);