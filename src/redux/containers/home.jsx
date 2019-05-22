// import { connect } from 'react-redux'
// import * as TodoActions from '../action/index'
// import { bindActionCreators } from 'redux'
// import home from '../../components/home/home'
//
// const mapStateToProps = state => ({
//     todosCount: state.todos.length,
// })
//
//
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(TodoActions, dispatch)
// })
//
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(home)
import { connect } from 'react-redux'
import * as AuthActions from '../action/AuthAction'
import { bindActionCreators } from 'redux'
import Home from '../../components/home/home'
console.log('home container jsx is run')

const mapStateToProps = (state,ownProps) => {
    console.log('state==>',state,'ownProps==>',ownProps)
    return state['Auth']
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AuthActions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
