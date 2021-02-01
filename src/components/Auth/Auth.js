import React,  {Component} from 'react'
import axios from 'axios'

class Auth extends Component {
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
                Hello
            </div>
        )
    }
}

export default Auth