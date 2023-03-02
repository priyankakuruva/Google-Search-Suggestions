import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {inputSearch: ''}

  onSearch = event => {
    this.setState({inputSearch: event.target.value})
  }

  select = (id, suggestion) => {
    console.log('running the select in google')

    console.log(id)
    console.log(suggestion)
    this.setState({inputSearch: suggestion})
  }

  render() {
    const {inputSearch} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(inputSearch.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="bg-container">
          <div>
            <img
              className="google-logo"
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
            />
          </div>

          <ul className="box-container">
            <div className="search-input-container">
              <img
                className="search-image"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                placeholder="Search Google"
                className="input"
                type="search"
                onChange={this.onSearch}
                value={inputSearch}
              />
            </div>

            {searchResults.map(eachItem => (
              <SuggestionItem
                details={eachItem}
                key={eachItem.id}
                selectedItem={this.select}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
