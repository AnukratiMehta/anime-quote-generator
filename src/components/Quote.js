import React from "react";

export default function Quote(props) {
    return (
        <div className="quote" id="quote">
            
            <blockquote title={props.card.quote} style={props.col}>
                {props.card.quote}
            </blockquote>
            <hr/>
            <div className="anime" title={props.card.anime} style={props.bg}>{props.card.anime}</div>
            <div className="character" title={props.card.character} style={props.bg}>{props.card.character}</div>
      
        </div>
    )
}


