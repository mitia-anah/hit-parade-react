import React from 'react'
import songList from '../pages/songList'
import { useParams } from 'react-router-dom'

function Song() {
    const { id } = useParams()
    const songLyrics = songList.find(lyrics => lyrics.id === id)
    return (
        <div className='lyrics-container'>
            <h3>{songLyrics.title}</h3>
            <p>{songLyrics.lyrics}</p>
        </div>
    )
}

export default Song
