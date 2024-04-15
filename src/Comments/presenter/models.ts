export type CommentProps = {
  id: number,
  body: string,
  hasLike: boolean,
  onClick: () => void
}

export type LikeImgProps = {
  src: string
}
