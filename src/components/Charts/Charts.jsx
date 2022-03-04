import React, {Component} from 'react';
import {setChart} from "../../redux/charts-reducer";

let createChart = (id,u) =>{
    let data = u.data;
    let tips = u.tips;

    var div = document.createElement("div");
    div.className = 'margin-div';
    var h3 = document.createElement("h3");
    h3.textContent = u.caption;
    document.getElementById('chartContainer').appendChild(div).appendChild(h3);

    u.data.forEach((u2) => {
        var canvas = document.createElement("canvas");
        canvas.id = 'canvas_' + id + u2.idc;
        var div = document.createElement("div");
        div.className = 'chart-div';
        var divv = document.getElementById('chartContainer').appendChild(div);
        divv.appendChild(canvas);
        let ctxDymanicly = document.getElementById('canvas_' + id + u2.idc).getContext('2d');
        // const myChart = new Chart(ctxDymanicly, {
        //     type: 'bar',
        //     data: {
        //         labels: labels,
        //         datasets: [{
        //             label: u.caption,
        //             data: values,
        //             backgroundColor: backgroundColor,
        //             borderColor: borderColor,
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             y: {
        //                 beginAtZero: true
        //             }
        //         }
        //     }
        // });
        // let data2 = '{"labels":["Да","Нет","Не знаю"],"datasets":[{"label":"Dataset 1","data":[53,24,23],"backgroundColor":["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)"]}]}';
        // data2 = JSON.parse(data2);
        const myChart = new Chart(ctxDymanicly, {
            type: 'pie',
            data: {
                labels: tips,
                datasets: [{
                    label: 'Dataset1',
                    data: u2.value,
                    backgroundColor: u.backgroundColor,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: u2.name
                    }
                }
            },
        });
        var p = document.createElement("p");
        p.className = 'pchart';
        p.textContent = 'Опрошено: ' + (u2.count || "-") + ' человек';
        divv.appendChild(p);
    });

}
let Charts = (props) => {
    if (props.charts.length === 0){
        props.setChart([
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
        ])
    }
    return (
        <div>
            {props.charts.map(u => <div key={u.id}>
                {createChart(u.id,u)}
            {/*<div>*/}
            {/*    {u.name}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {u.data.map(u2 => <div key={u2.idc}><p>{u2.name}</p><p>{u2.value}</p></div>)}*/}
            {/*</div>*/}
            {/*{u.clicked ? <button onClick={() => {*/}
            {/*    props.showmore(u.id)*/}
            {/*}}>Show more</button> : <button onClick={() => {*/}
            {/*    props.showless(u.id)*/}
            {/*}}>Show less</button>}*/}
        </div>)}
            {/*Heelo!!*/}
        </div>
    );
}


export default Charts;