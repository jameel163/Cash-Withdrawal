import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {myMoney: 2000}

  lessing50 = value => {
    const {myMoney} = this.state
    if (myMoney >= value) {
      this.setState(prev => ({
        myMoney: prev.myMoney - value,
      }))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {myMoney} = this.state
    return (
      <div className="total-bg">
        <div className="container">
          <div className="profile">
            <p className="letter">S</p>
            <p className="userName">Sarah Williams</p>
          </div>
          <div className="balanceCont">
            <p className="balance">Your Balance</p>
            <div>
              <p className="money">{myMoney}</p>
              <p className="moneyInLetter">In Rupees</p>
            </div>
          </div>
          <p className="Withdraw">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="unOrder">
            {denominationsList.map(each => (
              <DenominationItem
                items={each}
                key={each.id}
                lessing50={this.lessing50}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
