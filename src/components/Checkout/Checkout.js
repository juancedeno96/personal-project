import React,  {Component} from 'react'
// import axios from 'axios'

class Checkout extends Component {
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
                Checkout
            </div>
        )
    }
}

export default Checkout