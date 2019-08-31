//const store = createStore(counter, applyMiddleware(thunk))
// return enhancer(createStore)(reducer)
const applyMiddleware = (middleware) => {
    return createStore => (...args) => {
        const store = createStore(...args);
        let dispatch = store.dispatch;

        const midApi = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        };

        dispatch = middleware(midApi)(store.dispatch);

        return {
            ...store,
            dispatch
        }

    }
};

export default applyMiddleware;
