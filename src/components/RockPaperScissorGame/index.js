import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import RockPaperScissorButtons from '../RockPaperScissorButtons'
import GameResultView from '../GameResultView'
import {
  CustomContainer,
  TopBorderContainer,
  RPSParaContainer,
  Heading,
  ScoreContainer,
  Para,
  ScorePara,
  UnorderList,
  PopupContainer,
  RulesButton,
  ImageContainer,
  RulesImage,
  CloseButton,
  ImgBgCont,
  CloseBtnCont,
} from './styledComponents'

class RockPaperScissorGame extends Component {
  state = {
    myChoice: {},
    opponentChoice: {},
    showResult: false,
    Score: 0,
    resultMsg: '',
  }

  onClickPlayAgain = () => {
    this.setState({showResult: false})
  }

  onGetResult = () => {
    const {myChoice, opponentChoice, resultMsg} = this.state
    // const {image} = opponentChoice
    return (
      <GameResultView
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMsg={resultMsg}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetImages = () => {
    const {choicesList} = this.props
    return (
      <UnorderList>
        {choicesList.map(choices => (
          <RockPaperScissorButtons
            choices={choices}
            key={choices.id}
            onClickButton={this.onClickButton}
          />
        ))}
      </UnorderList>
    )
  }

  onClickButton = (id, imageUrl) => {
    const {choicesList} = this.props
    const randomNum = Math.floor(Math.random() * choicesList.length)
    const oppId = choicesList[randomNum]
    // console.log(oppId.id)
    // console.log(id)
    if (oppId.id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: oppId,
        Score: prevState.Score - 1,
        resultMsg: 'YOU LOSE',
      }))
    } else if (oppId.id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: oppId,
        Score: prevState.Score + 1,
        resultMsg: 'YOU WON',
      }))
    } else if (oppId.id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: oppId,
        Score: prevState.Score - 1,
        resultMsg: 'YOU LOSE',
      }))
    } else if (oppId.id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: oppId,
        Score: prevState.Score + 1,
        resultMsg: 'YOU WON',
      }))
    } else if (oppId.id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: oppId,
        Score: prevState.Score - 1,
        resultMsg: 'YOU LOSE',
      }))
    } else if (oppId.id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: oppId,
        Score: prevState.Score + 1,
        resultMsg: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: oppId,
        resultMsg: 'IT IS DRAW',
      })
    }
  }

  render() {
    const {Score, showResult} = this.state
    return (
      <CustomContainer>
        <TopBorderContainer>
          <RPSParaContainer>
            <Heading>
              ROCK <br />
              PAPER <br />
              SCISSORS <br />
            </Heading>
          </RPSParaContainer>
          <ScoreContainer>
            <Para>Score</Para>
            <ScorePara>{Score}</ScorePara>
          </ScoreContainer>
        </TopBorderContainer>
        {showResult ? this.onGetResult() : this.onGetImages()}

        <PopupContainer>
          <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
            {close => (
              <ImgBgCont>
                <CloseBtnCont>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseButton>
                </CloseBtnCont>

                <ImageContainer>
                  <RulesImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </ImageContainer>
              </ImgBgCont>
            )}
          </Popup>
        </PopupContainer>
      </CustomContainer>
    )
  }
}
export default RockPaperScissorGame
