import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from "../src/redux/redux-store";
import Charts from "../src/components/Charts/Charts";
import Header from "../src/components/Header/Header";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {Provider} from "react-redux";
import ChartsContainer from "../src/components/Charts/ChartsContainer";
import './styles/app.css';
import Questions from "../src/components/Questions/Questions";

class App extends Component {
    componentDidMount() {
        let charts = document.getElementById("chartContainer");
        if (charts){
            while (charts.firstChild) {
                charts.removeChild(charts.firstChild);
            }
        }
    }

    render() {
        return (
            <div>
                Hello!@!!
                <ChartsContainer />
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Header />
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/questions' element={<Questions />}/>
            </Routes>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));


// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA