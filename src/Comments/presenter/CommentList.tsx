import { useState, useEffect } from "react";
import { CommentsDto } from "../infrastructure/models/comments.dto";
import { Comment } from "./Comment";
import axios from "axios";
import { LikeImg } from "./LikeImg";


const CommentList = () => {
  const [ comments, setComments ] = useState<CommentsDto[]>([]) 
  const [ likes, setLikes ] = useState(new Map<number, boolean>())

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get("https://gorest.co.in/public/v2/comments")
      setComments(response.data)
    }

    apiCall()
  }, [])  

  const setLike = (id: number) => {
    if (! likes.get(id)) {
      setLikes(new Map(likes.set(id, true)))
      return
    }

    setLikes(new Map(likes.set(id, false)))
  }

  return (
    <ul>
    {comments.map((comment) => {
      return (
        <li>
          <Comment 
            id={comment.id}
            body={comment.body}
            hasLike={!!likes.get(comment.id)}
            onClick={() => setLike(comment.id)}
          />
        </li>
      )
    })}
    </ul>
  )
}

export { CommentList }
