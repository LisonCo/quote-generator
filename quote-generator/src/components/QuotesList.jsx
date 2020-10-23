import React, { Component } from 'react';

class quotesList extends Component {
    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //       user: {
    //         username: "",
    //         password: "",
    //       }
    //     };
    // }
    
    render() {
        let allQuotes = this.props.quotes.map((quote, index) => {
            return (<div key={index}>{quote}</div>)
        })
        return (
            <div>{allQuotes}</div>
        )
    }
}

export default quotesList