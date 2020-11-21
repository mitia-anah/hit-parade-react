import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import PopularSong from '../component/PopularSong'
import Song from '../component/Song'
import Home from './Home'
import SongLib from './SongLib'

function Header() {
    return (
        <div>
            <h1> Hit Parade</h1>
            <nav>
                <ul className="header-row">`
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/song'>🔥Popular songs</Link></li>
                    <li><Link to='/styles'>💗Styles</Link></li>
                    <li><Link to='/add'>🙄Add</Link></li>
                    <li><Link to='/cart'>🛒Cart</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <SongLib />
                </Route>
                <Route exact path="/song">
                    <PopularSong />
                </Route>
                <Route exact path="/song/:id">
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
