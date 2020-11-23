import React, { useEffect, useState } from 'react'
import songList from './pages/songList'
const Context = React.createContext()


function ContextProvider({ children }) {
    const [songs, setSongs] = useState([])
    const [upVote, setUpVote] = useState(0)
    const [downVote, setDownVote] = useState(0)
    const [cartItem, setCartItem] = useState([])

    useEffect(() => {
        setSongs(songList)
    }, [])

    function updateUpVote(id) {
        const increaseVote = songs.find(data => data.id == id)
        let voted = increaseVote.upVote++;
        setUpVote(voted);
    }

    function updateDownVote(id) {
        const decreaseVote = songs.find(data => data.id == id)
        let votedSong = decreaseVote.downVote++;
        setDownVote(votedSong);
    }

    function toggleFavorite(id) {
        console.log(id);
        const chooseFavorite = songs.map(song => {
            if (song.id === id) {
                console.log(id);
                return {
                    ...song,
                    isFavorite: !song.isFavorite
                }
            }
            return song
        })
        setSongs(chooseFavorite)
    }


    function addToCart(song) {
        setCartItem(prevItem => [...prevItem, song])
    }

    function moreButton(id) {
        setCartItem(prevItem => [...prevItem, id])
    }
    function removeSong(id) {
        const removeImg = songs.filter(cartItem => cartItem.id !== id)
        console.log(removeImg);
        setSongs(removeImg)
        // setCartItem(prevItems => prevItems.filter(item => item.id !== id))
    }

    return (
        <Context.Provider value={{
            songs,
            cartItem,
            removeSong,
            updateUpVote,
            updateDownVote,
            toggleFavorite,
            moreButton,
            addToCart,
        }}>
            {children}
        </Context.Provider>
    )

}

export { ContextProvider, Context }