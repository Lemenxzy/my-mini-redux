const createStore = (reducer, enhancer) => {

    if (enhancer) {
        return enhancer(createStore)(reducer)
    }

    let currentState = {};
    let currentListeners = [];

    // 获取状态数
    function getState() {
        return currentState
    }

    // 发布订阅
    function subscribe(listener) {
        currentListeners.push(listener)
    }
    function dispatch(action) {
        // 初始是 10
        currentState = reducer(currentState, action);
        // 初始是空数组
        currentListeners.forEach(v => v());
        return action
    }
    dispatch({type: '@REACT_FIRST_ACTION'});  //初始化state 就是 default 的 10

    return { getState, subscribe, dispatch}

};

export default createStore;
