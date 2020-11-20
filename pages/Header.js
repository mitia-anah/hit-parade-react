import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Song from '../component/Song'

function Header() {
    return (
        <div>
            <h1> Hit Parade</h1>
            <nav>
                <ul className="header-row">
                    <li><Link to='/'>🔥Popular songs</Link></li>
                    <li><Link to='/styles'>💗Styles</Link></li>
                    <li><Link to='/add'>🙄Add</Link></li>
                    <li><Link to='/cart'>🛒Cart</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Song />
                </Route>
                <Route exact path="/styles">

                </Route>
                <Route exact path="/add">

                </Route>
                <Route path="/card">

                </Route>
            </Switch>
        </div>
    )
}

export default Header
