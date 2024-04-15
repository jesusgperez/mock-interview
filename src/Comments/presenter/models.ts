export type CommentProps = {
  id: number,
  body: string,
  likes: Map<number, boolean>,
  setLike: (id: number) => void
}

export type LikeImgProps = {
  src: string
}
