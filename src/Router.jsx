import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import AboutMe from './components/contents/AboutMe'
import Hobbies from './components/contents/Hobbies'
import MyProjects from './components/contents/MyProjects'
import Portifolio from './components/contents/Portifolio'



export default props=>
    <Switch>
        {/* exact = exatamente este path para ser encaminhado para este componente  */}
        <Route exact path='/site/' component={AboutMe}/>
        <Route exact path='/site/hobbies/' component={Hobbies}/>
        <Route exact path='/site/experiencia/' component={MyProjects}/>
        <Route exact path='/site/portfolio/' component={Portifolio}/>
        {/* caso qualquer outra coisa seja escrita na url sera redirecionado para / indo para Home  */}
        <Redirect from='*' to='/site/'/>
    </Switch>