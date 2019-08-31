import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from './bindActionCreators';

export default ( mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => (
    class ConnectComponent extends React.Component{
        constructor(props, context){
            super(props, context);
            this.state = {
                props:{}
            }
        }

        // 将虫洞注入进
        static contextTypes = {
            store:PropTypes.object
        };

        componentDidMount(){
            // 拿到虫洞的 store
            const {store} = this.context;
            // 要更新一下
            store.subscribe(()=>this.update());
            this.update()
        }

        update = () => {
            const {store} = this.context;
            // 更新重新拿到状态
            const stateProps = mapStateToProps(store.getState());
            // 方法不能直接给，因为需要dispatch
            const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch);
            this.setState({
                props:{
                    ...this.state.props,
                    ...stateProps,
                    ...dispatchProps
                }
            })
        };

        render(){
            return <WrapComponent {...this.state.props} />
        }

    }
)
