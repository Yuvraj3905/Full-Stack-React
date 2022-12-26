import React from 'react';
import axios from 'axios';

import history from '../utils/history';
import TextField from '@material-ui/core/Button';
import { connect } from 'react-redux';

class AddPost extends Component {
    handleSubmit=(event)=>{
        event.preventDefault()
        const user_id= this.props.db_profile[0].uid
        const username=this.props.db_profile[0].username
        const data=
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                    id="title"
                    label="Title"
                    margin="normal"/>
                    <br />
                    <TextField
                    id="body"
                    label="Body"
                    multiline
                    rows="4"
                    margin="normal"/>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
                <br />
                <button onClick={{}=> history.replace('posts')}>Cancel</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        db_profile: state.auth_reducer.db_profile
    }
}

export default connect(mapStateToProps)(AddPost)