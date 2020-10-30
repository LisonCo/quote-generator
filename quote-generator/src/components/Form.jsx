import React, { Component } from "react";

class form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formContent: {
                quoteType: "1",
                numberOfQuotes: ""
            },
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = e => {
        e.preventDefault();
        if(!this.props.onSubmit){
            return
        }
        this.props.onSubmit(this.state.formContent)
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
                          <select
                            name="quoteType"
                            value={this.state.formContent.quoteType}
                            onChange={this.handleFormChange}
                        >
                            <option value="1">Campagne</option>
                            <option value="2">Mer</option>
                        </select>
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
                        <input type="submit" value="Créer des haïkus" />
                    </div>
                </form>
            </div>
        );
    }
}

export default form;
