import React,  {Component} from 'react'
import axios from 'axios'

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''

        }
    }

    render(){
        return(
            <div>
                Landing
            </div>
        )
    }
}

export default Landing