// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    // console.log(faqsList)
    return (
      <div className="main-div">
        <div className="white-div">
          <h1 className="faq-head">FAQs</h1>
          <ul className="un-list-div">
            {faqsList.map(each => (
              <FaqItem key={each.id} faq={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
