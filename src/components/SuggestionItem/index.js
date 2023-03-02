// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details, selectedItem} = props
  const {id, suggestion} = details

  const onButton = () => {
    console.log(`prem clicked the button ${id}`)
    selectedItem(id, suggestion)
  }
  return (
    <li className="items-container">
      <p>{suggestion}</p>
      <button className="arrow-button" type="button" onClick={onButton}>
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
