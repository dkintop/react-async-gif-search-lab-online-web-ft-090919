import import React, { Component } from 'react'

export default class GifListContainer extends Component {
    
    constructor(){
        super()
        this.stat = {
            data: []
        }
    }
    
    
    
    render() {
        return (
            <div>
            <GifList fetchData = {this.state.data}/>            
            </div>
        )
    }
}
