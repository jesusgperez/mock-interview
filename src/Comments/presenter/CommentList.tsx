import { useState, useEffect } from "react";
import { CommentsDto } from "../infrastructure/models/comments.dto";
import { Comment } from "./Comment";
import axios from "axios";

const CommentList = () => {
  const [ comments, setComments ] = useState<CommentsDto[]>([])

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get("https://gorest.co.in/public/v2/comments")
      setComments(response.data)
    }

    apiCall()
  } ,[])

  return (
    <ul>
    {comments.map((comment) => {
      return (
        <li>
          <Comment body={comment.body} />
        </li>
      )
    })}
    </ul>
  )
}

export { CommentList }
