import React, { useContext } from 'react'
import songList from '../pages/songList'
import { Context } from '../songContext'

function Song() {
    const { upVote, downVote, handleUpVote, handleDownVote } = useContext(Context)
    const songs = songList.map(song => (
        <div key={song.id} className="song-card">
            <i className="ri-heart-line"></i>
            <div className='title-and-writer'>
                <h3>{song.title}</h3>
                <p>
                    {song.songWriters}
                </p>
            </div>
            <i onClick={handleUpVote} className="ri-arrow-up-line">{upVote}</i>
            <i onClick={handleDownVote} className="ri-arrow-down-line">{downVote}</i>
            <i className="ri-shopping-cart-2-line"></i>
            <i className="ri-more-line"></i>
        </div>
    ))
    return (
        <div className='song-container'>
            {songs}
        </div>
    )
}

export default Song
