import React from "react";

export default function Quote(props) {
    return (
        <div className="quote">
            <div className="anime" title={props.card.anime}>{props.card.anime}</div>
            <blockquote title={props.card.quote}>
                {props.card.quote}
            </blockquote>
            <div className="character" title={props.card.character}>{props.card.character}</div>
        
    
            
        </div>
    )
}


