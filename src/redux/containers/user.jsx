import { connect } from 'react-redux'
import * as UserActions from '../action/axiosAction'
import { bindActionCreators } from 'redux'
import User from '../../components/user/user'

const mapStateToProps = (state,ownProps) => {
    return state['User']
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(UserActions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
