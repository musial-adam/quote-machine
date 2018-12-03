import React, { Component } from "react";
import "./QuoteBox.css";

import Button from "../Button/Button";

class QuoteBox extends Component {
    state = {
        loaded: false,
        quote: "",
        author: "",
        error: null
    };

    handleClick = () => {
		
        // fetch("http://quotes.rest/qod.json")
        //     .then(response => response.json())
        //     .then(result => {
        //         this.setState({
        //             loaded: true,
        //             quote: result.contents.quotes[0].quote,
        //             author: result.contents.quotes[0].author
        //         });
        //         // console.log(result.contents.quotes[0]);
        //     });
        fetch("https://talaikis.com/api/quotes/random/")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    loaded: true,
                    quote: result.quote,
                    author: result.author
                });
            });
    };

    // componentDidMount() {
    // 	fetch("http://quotes.rest/qod.json")
    // 		.then(response => response.json())
    // 		.then(result => {
    // 			this.setState({
    // 				loaded: true,
    // 				quote: result.contents.quotes[0].quote,
    // 				author: result.contents.quotes[0].author
    // 			});
    // 			// console.log(result.contents.quotes[0]);
    // 		});
    // }

    render() {
        const { error, quote, author, loaded } = this.state;

        if (!loaded) {
            if (quote === "")
                return (
                    <div className="QuoteBox">
                        <div className="QuoteText">There is no quote loaded</div>
                        <Button clicked={this.handleClick}>New quote</Button>
                    </div>
				);
			else
            	return <div>Loading a quote</div>;
        } else {
            return (
                <div className="QuoteBox">
                    <div className="QuoteText">{quote}</div>
                    <div className="QuoteAuthor">{author}</div>
                    <Button clicked={this.handleClick}>New quote</Button>
                </div>
            );
        }
    }
}

export default QuoteBox;
