import React from 'react'
import ReactDOM from 'react-dom'
import './app/styles/style.scss'
import png from './app/img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'

import "semantic-ui-less/semantic.less";

import Layout from './app/layouts/Layout'
import Main from './app/pages/Main'
import About from './app/pages/About'
import Contacts from './app/pages/Contacts'
import PageNotFound from './app/pages/PageNotFound'

import User from './app/pages/User'
import Users from './app/pages/Users'
import Post from './app/pages/Post'
import Posts from './app/pages/Posts'
import Comment from './app/pages/Comment'
import Comments from './app/pages/Comments'

import { Router, Route, IndexRoute, browserHistory} from 'react-router'

ReactDOM.render(<Router history={ browserHistory }>
        <Route path='/' component={ Layout }>
            <IndexRoute component={ Main } />
            <Route path='about' component={ About }/>
            <Route path='users' component={ Users }>
                <Route path=':userId' component={ User }/>
            </Route>/>
            <Route path='posts' component={ Posts }>
                <Route path=':postId' component={ Post } />
            </Route>
            <Route path='comments' component={ Comments }>
                <Route path=':commentId' component={ Comment } />
            </Route>
            <Route path='contacts' component={ Contacts }>
                <Route path=':number' component={ Contacts }/>
            </Route>/>
            <Route path='*' component={ PageNotFound }/>
        </Route>
    </Router>, document.querySelector('#root'))