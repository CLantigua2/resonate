import React from 'react'
import HomePage from './HomePage'
import Wrapper from './Wrapper'
import SignupPage from './SignupPage'
import { Route, Switch } from 'react-router-dom'


const Path = () => (
    <>
        <Wrapper>
            <Switch>
                <Route exact path="/"><HomePage /></Route>
            </Switch>
            <Switch>
                <Route exact path="/signup"><SignupPage /></Route>
            </Switch>
        </Wrapper>
    </>
)


export default Path;