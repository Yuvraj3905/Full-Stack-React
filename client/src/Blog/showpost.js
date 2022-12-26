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

class ShowPost extends Component {
    render(){
        return (
            <div>
            <div>
            <h2>Post</h2>
            <h4>{this.props.location.state.post.post.title}</h4>
            </div>
            </div>
        )
    }
}