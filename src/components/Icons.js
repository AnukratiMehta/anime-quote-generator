import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faTwitterSquare, faPinterestSquare, faTumblrSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";


export default function Icons() {
    return (
        
        <div className="icon-bar">
            <FontAwesomeIcon icon={faFacebookSquare} className="icons"/>
            <FontAwesomeIcon icon={faTwitterSquare} className="icons"/>
            <FontAwesomeIcon icon={faPinterestSquare} className="icons"/>
            <FontAwesomeIcon icon={faTumblrSquare} className="icons"/>
            <FontAwesomeIcon icon={faInstagramSquare} className="icons"/>
            
           
        </div>
    )
}