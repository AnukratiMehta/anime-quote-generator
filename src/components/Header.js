import React from "react";

export default function Header(props) {
    return (
        <div className="header" style={props.col}>
            <h2 className="header-title">Anime Quote Generator</h2>
            <h4 className="header-name">By Anukrati Mehta</h4>
    </div>
    )
}