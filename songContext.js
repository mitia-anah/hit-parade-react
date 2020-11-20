import React, { useEffect, useState } from 'react'
const Context = React.createContext()
import songList from './pages/songList'

function ContextProvider({ children }) {
    const songs = songList;
    const [upVote, setUpVote] = useState(0)
    const [downVote, setDownVote] = useState(0)


    function handleUpVote(id) {
        const voteForUp = songs.find(song => song.id == id)
        let addedScore = voteForUp.upVote++;
        setUpVote(addedScore)
    }

    function handleDownVote(id) {
        const voteForDown = songs.find(song => song.id == id)
        let votedScore = voteForDown.upVote++;
        setDownVote(votedScore)
    }
    useEffect(() => {
        handleUpVote()
        handleDownVote()
    }, [])

    return (
        <Context.Provider value={{ upVote, downVote, handleUpVote, handleDownVote }}>
            {children}
        </Context.Provider>
    )

}

export { ContextProvider, Context }