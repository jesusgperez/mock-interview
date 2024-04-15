import { CommentProps } from "./models"

const Comment = (props: CommentProps) => {
  return (
    <div>
      <p>
        { props.body }
      </p>
    </div>
  )
}

export { Comment }

