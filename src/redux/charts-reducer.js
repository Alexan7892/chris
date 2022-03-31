const SHOW = 'SHOW';
const SHOWLESS = 'SHOWLESS';
const SET_CHARTS = 'SET_CHARTS';

let initialState = {
    charts: [ ]
};

const chartsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW:
            return {
                ...state,
                charts: state.charts.map( u =>  {
                    if (u.id === action.id) {
                        return {...u, clicked: false}
                    }
                    return u;
                })
            }
        case SHOWLESS:
            return {
                ...state,
                charts: state.charts.map( u =>  {
                    if (u.id === action.id) {
                        return {...u, clicked: true}
                    }
                    return u;
                })
            }
        case SET_CHARTS: {
            return { ...state, charts: [ ...state.charts, ...action.charts ]}
        }
        default:
            return state;
    }
}


export const showmore = (id) => ({type: SHOW, id })
export const showless = (id) => ({type: SHOWLESS, id })
export const setChart = (charts) => ({type: SET_CHARTS, charts})

export default chartsReducer;