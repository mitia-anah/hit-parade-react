import React, { useContext } from 'react'
import { Context } from '../songContext'


function PopularSong() {
    const { songs } = useContext(Context)
    const popularSongs = songs.map(song => (
        song.release_date > 2000
            ? <div key={song.id} className='song-cards'>
                <h3>{song.title}</h3>
                <p>{song.lyrics}</p>
                <p>{song.release_date}</p>
            </div>
            : ''
    ))

    return (
        <div className='song-and-lyrics'>
            {popularSongs}
        </div>
    )
}

export default PopularSong
