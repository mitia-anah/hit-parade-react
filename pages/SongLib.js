import React, { useContext } from 'react'
import { Context } from '../songContext'
import Home from './Home'

function SongLib() {
    const { songs } = useContext(Context)

    const sortedSongs = songs
        .sort((a, b) => b.release_date - a.release_date)
        .map(song => <Home key={song.id} song={song} />)

    return (
        <div>
            {sortedSongs}
        </div>
    )
}

export default SongLib
