// 重新遍历的传来的action。然后把他们dispatch一遍
export const bindActionCreators = (actions, dispatch) => {
    let bound = {};
    Object.keys(actions).forEach(v=>{
        let creator = actions[v];
        bound[v] = bindActionCreator(creator, dispatch)
    });
    return bound
};

const bindActionCreator = (actions, dispatch) => {
    return (...args) => dispatch(actions(...args))
};
