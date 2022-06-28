import React from 'react'
import { useAddReactionMutation } from '../api/apiSlice'
const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
}

export const ReactionButtons = ({ post }) => {
  const [addReaction] = useAddReactionMutation()
  const onButtonClicked = (name) => {
    //dispatch(reactionAdded({ postId: post.id, reaction: name }))
    addReaction({ postId: post.id, reaction: name })
  }
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={(e) => onButtonClicked(name)}
      >
        {emoji}
        {post.reactions[name]}
      </button>
    )
  })
  return <div>{reactionButtons}</div>
}
