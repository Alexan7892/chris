import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from "../src/redux/redux-store";
import Charts from "../src/components/Charts/Charts";
import Header from "../src/components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import ChartsContainer from "../src/components/Charts/ChartsContainer";
import './styles/app.css';

class App extends Component {
    render() {
        debugger;
        return (
            <div>
                <Header />
                <ChartsContainer />
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));


// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA