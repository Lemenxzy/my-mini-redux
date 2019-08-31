import React from 'react'
import PropTypes from 'prop-types'

// 把store放到context里, 所有的子元素可以直接取到store
export default class Provider extends React.Component{
    // 限制数据类型
    static childContextTypes = {
        store: PropTypes.object
    };

    getChildContext(){
        return { store:this.store }
    }

    constructor(props, context){
        super(props, context);
        this.store = props.store
    }

    render(){
        // 返回所有子元素
        return this.props.children
    }
}
