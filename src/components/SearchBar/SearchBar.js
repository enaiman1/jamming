import React, { Component } from "react";
import './searchBar.css'

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = {
      term: ""
    }

    this.search = this.search.bind(this)    
    this.handleTermChange = this.handleTermChange.bind(this)
  }

  search =() => this.props.onSearch(this.state.term)


  handleTermChange = event =>this.setState({ term: event.target.value })

  

  render = () => <div className="SearchBar">
                    <input placeholder="Enter A Song, Album, or Artist" onChange={ this.handleTermChange }/>
                    <button className="SearchButton">SEARCH</button>
                  </div>


}


export default SearchBar