import { LikeImgProps } from "./models"


const LikeImg = (props: LikeImgProps) => {
  return (
    <img
      width="25"
      height="25"
      src={props.src}
    />
  )
}

export { LikeImg }
