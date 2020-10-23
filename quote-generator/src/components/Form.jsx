import React, { Component } from "react";

class form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formContent: {
                quoteType: "",
                numberOfQuotes: ""
            },
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = e => {
        e.preventDefault();
        console.log(this.state.formContent)
    };

    handleFormChange = e => {
        let formContent = this.state.formContent;
        formContent[e.target.name] = e.target.value;
        this.setState({
            formContent: formContent
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <div>
                        <label>Type de citation</label>
                        <input

                            type="text"
                            name="quoteType"
                            value={this.state.formContent.quoteType}
                            onChange={this.handleFormChange}
                        />
                    </div>

                    <div>
                        <label>Nombre de citations</label>
                        <input
                            type="text"
                            name="numberOfQuotes"
                            value={this.state.formContent.numberOfQuotes}
                            onChange={this.handleFormChange}
                        />
                    </div>

                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default form;
