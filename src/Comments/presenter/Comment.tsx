import { CommentProps } from "./models"
import { LikeImg } from "./LikeImg"

const Comment = (props: CommentProps) => {
  return (
    <div className="flex flex-row items-center max-w-96 py-4 border-2 border-black-500">
      <div className="basis-3/4 px-2">
        <p>
          { props.body }
        </p>
      </div>
      <div className="basis-1/4">
        <button
          onClick={props.onClick}
        >
          {
            props.hasLike ? 
            <LikeImg src="like.png" /> : <LikeImg src="empty_like.jpg" />
          }
        </button>
      </div>
    </div>
  )
}

export { Comment }
