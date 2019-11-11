import React from 'react'
import ReactDOM from 'react-dom'
import './app/styles/style.css'
import png from './app/img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from './app/layouts/Layout'
import Main from './app/components/Main'
import Users from './app/components/Users'
import Tech from './app/components/Tech'
import About from './app/components/About'
import Contacts from './app/components/Contacts'
import PageNotFound from './app/components/PageNotFound'
import { Router, Route, IndexRoute, browserHistory} from 'react-router'

ReactDOM.render(<Router history={ browserHistory }>
        <Route path='/' component={ Layout }>
            <IndexRoute component={ Main } />
            <Route path='about' component={ About }/>
            <Route path='users' component={ Users }/>
            <Route path='tech' component={ Tech }/>
            <Route path='contacts' component={ Contacts }/>
            <Route path='contacts/:number' component={ Contacts }/>
            <Route path='*' component={ PageNotFound }/>
        </Route>
    </Router>, document.querySelector('#root'))