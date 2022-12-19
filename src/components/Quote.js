import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitterSquare } from "@fortawesome/free-brands-svg-icons";


export default function Quote(props) {
    return (
        <div className="quote" id="quote-box">
            
            <blockquote title={props.card.quote} style={props.col} id="text">
                {props.card.quote}
            </blockquote>
            <hr/>
            <div className="anime" title={props.card.anime} style={props.bg} >{props.card.anime}</div>
            <div className="character" title={props.card.character} style={props.bg} id="author">{props.card.character}</div>

            <button onClick={props.fetchData} style={props.col} id="new-quote">New Quote</button>

            
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} className="icons"/></a>
            
      
        </div>
    )
}


