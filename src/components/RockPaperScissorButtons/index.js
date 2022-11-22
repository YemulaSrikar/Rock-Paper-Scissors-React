import {ListItems, ImageButton, Image} from './styledComponents'

const RockPaperScissorButtons = props => {
  const {choices, onClickButton} = props
  const {id, imageUrl} = choices
  const onClickItem = () => {
    onClickButton(id, imageUrl)
  }
  const lowerCaseId = id.toLowerCase()
  // console.log(`${lowerCaseId}Button`)
  return (
    <ListItems>
      <ImageButton
        data-testid={`${lowerCaseId}Button`}
        type="button"
        onClick={onClickItem}
      >
        <Image src={imageUrl} alt={id} />
      </ImageButton>
    </ListItems>
  )
}
export default RockPaperScissorButtons
