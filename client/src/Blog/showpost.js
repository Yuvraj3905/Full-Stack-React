import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';
import * as ACTIONS from '../store/actions/actions';
import axios from 'axios';

import history from '../utils/history';
import TextField from '@material-ui/core/TextField'; 
import Dialog from '@material-ui/core/Dialog'; 
import DialogActions from '@material-ui/core/DialogActions'; 
import DialogContent from '@material-ui/core/DialogContent'; 
import DialogContentText from '@material-ui/core/DialogContent Text'; 
import DialogTitle from '@material-ui/core/DialogTitle'; 
import Button from '@material-ui/core/Button';



const RenderComments = ( comment )=> (
    <div>
        <h3> {comment.comment.comment} </h3>
        <small>{comment.comment.date_created}</small>
        <p>By:{comment.comment.author}</p>
        {comment.cur_user_id==comment.comment.user_id
        ? <Button onClick={()=> this.handleClickOpen(comment.comment.cid, comment.comment.comment)}>
            Edit
        </Button>
        :null
        }
    </div>
)



class ShowPost extends Component {
    constructor(props) {
      super(props)

      this.state = {
        open: false,
        comments:'',
        cid:''

      }
    }
   handleClickOpen=(cid, comment) => (
     this.setState({open: true, comments: comment,cid: cid})
   );

   handleClose = () => (
    this.setState({open: false,comment:'',cid:''})
   )

   

    render(){
        return (
            <div>
            <div>
            <h2>Post</h2>
            <h4>{this.props.location.state.post.post.title}</h4>
            <p>{this.props.location.state.post.post.body}</p>
            <p>{this.props.location.state.post.post.author}</p>

            </div>
            <div>
                <h2>Comments:</h2>
                {this.props.comments}
            </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        comments: state.posts_reducer.comments
    }
}
function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost)