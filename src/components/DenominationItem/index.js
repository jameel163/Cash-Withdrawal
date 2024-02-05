import './index.css'

const DenominationItem = props => {
  const {items, lessing50} = props
  const {value} = items

  const reducing50 = num => {
    lessing50(value)
  }

  return (
    <li>
      <button className="butt" onClick={reducing50}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
