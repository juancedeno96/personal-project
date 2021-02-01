import React,  {Component} from 'react'
import axios from 'axios'

class Profile extends Component {
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
                profile
            </div>
        )
    }
}

export default Profile