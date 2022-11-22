import {
  ResultMainContainer,
  MyContainer,
  MyOppContainer,
  Heading,
  MyImage,
  OppImage,
  OppContainer,
  ResultContainer,
  ResultMsg,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {myChoice, opponentChoice, resultMsg, playAgain} = props
  const {imageUrl} = opponentChoice

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <ResultMainContainer>
      <MyOppContainer>
        <MyContainer>
          <Heading>You</Heading>
          <MyImage src={myChoice[1]} alt="your choice" />
        </MyContainer>

        <OppContainer>
          <Heading>Opponent</Heading>
          <OppImage src={imageUrl} alt="opponent choice" />
        </OppContainer>
      </MyOppContainer>

      <ResultMsg>{resultMsg}</ResultMsg>
      <ResultContainer>
        <PlayAgainButton type="button" onClick={onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultContainer>
    </ResultMainContainer>
  )
}
export default GameResultView
