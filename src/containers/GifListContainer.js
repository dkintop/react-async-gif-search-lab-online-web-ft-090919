import import React, { Component } from 'react'

export default class GifListContainer extends Component {
    
    constructor(){
        super()
        this.stat = {
            data: []
        }
    }
    
    fetchGIFs = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  componentDidMount(){
      this.fetchGIFs()
  }
    
    render() {
        return (
            <div>
            <GifList fetchData = {this.state.data}/>            
            </div>
        )
    }
}
