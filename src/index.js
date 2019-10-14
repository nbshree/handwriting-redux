import createStore from "./createStore.js"
const initialState = {
    color: 'blue'
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                color: action.color
            }
        default:
            return state;
    }
}
const store = createStore(reducer);

function renderApp(state) {
    renderHeader(state);
    renderContent(state);
}
function renderHeader(state) {
    const header = document.getElementById('header');
    header.style.color = state.color;
}
function renderContent(state) {
    const content = document.getElementById('content');
    content.style.color = state.color;
}

document.getElementById('to-blue').onclick = function () {
    store.dispatch({
        type: 'CHANGE_COLOR',
        color: 'rgb(0, 51, 254)'
    });
}
document.getElementById('to-pink').onclick = function () {
    store.dispatch({
        type: 'CHANGE_COLOR',
        color: 'rgb(247, 109, 132)'
    });
}

renderApp(store.getState());
//每次state发生改变时，都重新渲染
store.subscribe(() => renderApp(store.getState()));
