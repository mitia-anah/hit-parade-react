import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../songContext'

function Home({ song }) {
    console.log(song);
    const { removeSong,
        updateUpVote,
        updateDownVote,
        toggleFavorite,
        moreButton,
        cartItem,
        addToCart } = useContext(Context)

    function heartIcon() {
        if (song.isFavorite) {
            return <i onClick={() => toggleFavorite(song.id)} className="ri-heart-fill favorite"></i>
        } else {
            return <i onClick={() => toggleFavorite(song.id)} className="ri-heart-line"></i>
        }
    }

    function cartIcon() {
        if (cartItem.some(cart => cart.id === song.id)) {
            return <i onClick={() => addToCart(song)} className="ri-shopping-cart-2-line"></i>
        } else {
            return <i onClick={() => addToCart(song)} className="ri-shopping-cart-2-line"></i>
        }
    }
    return (
        <div className='song-container'>
            <div className="song-card">
                {heartIcon()}
                <div className='title-and-writer'>
                    <h3>{song.title}</h3>
                    <p>{song.songWriters}</p>
                </div>

                <i onClick={() => updateUpVote(song.id)} className="ri-arrow-up-line">{song.upVote}</i>
                <i onClick={() => updateDownVote(song.id)} className="ri-arrow-down-line">{song.downVote}</i>
                {cartIcon()}
                <i onClick={() => moreButton(song.id)} className="ri-more-line"></i>
                <i onClick={() => removeSong(song.id)} className="ri-delete-bin-line"></i>
            </div>
        </div>
    )

}

export default Home