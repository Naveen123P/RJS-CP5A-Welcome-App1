// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {status: 'Subscribe'}

  toSubscribe = () => {
    const {status} = this.state
    if (status === 'Subscribe') {
      this.setState(() => ({status: 'Subscribed'}))
    } else {
      this.setState(() => ({status: 'Subscribe'}))
    }
  }

  render() {
    const {status} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button onClick={this.toSubscribe} className="button" type="button">
          {status}
        </button>
      </div>
    )
  }
}

export default Welcome
