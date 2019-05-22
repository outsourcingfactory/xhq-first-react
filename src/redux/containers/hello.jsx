import { connect } from 'react-redux'
import * as AuthActions from '../action/AuthAction'
import { bindActionCreators } from 'redux'
import Hello from '../../components/hello/hello'
console.log('hello container jsx is run')

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
)(Hello)
