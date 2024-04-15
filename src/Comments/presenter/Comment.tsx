import { CommentProps } from "./models"
import { LikeImg } from "./LikeImg"

const Comment = (props: CommentProps) => {
  return (
    <div>
      <p>
        { props.body }
      </p>
      <button
        onClick={() => props.setLike(props.id)}
      >
        {
          !!props.likes.get(props.id) ? 
          <LikeImg src="like.png" /> : <LikeImg src="empty_like.jpg" />
        }
      </button>
    </div>
  )
}

export { Comment }

