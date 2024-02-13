// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isPara: false,
  }

  onMinusPlus = () => {
    this.setState(prevState => ({isPara: !prevState.isPara}))
  }

  imagePage = () => {
    const {isPara} = this.state
    const image = !isPara
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

    const alternate = !isPara ? 'plus' : 'minus'

    return (
      <button className="images" onClick={this.onMinusPlus} type="button">
        <img src={image} alt={alternate} />
      </button>
    )
  }

  renderAnswer = () => {
    const {isPara} = this.state
    const {faq} = this.props
    const {answerText} = faq
    if (isPara) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faq} = this.props
    const {questionText} = faq
    return (
      <li className="list-item">
        <div className="text-div">
          <h1>{questionText}</h1>
          {this.imagePage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
