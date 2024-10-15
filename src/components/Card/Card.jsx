import React from 'react'
import './Card.css';

const getImageSrcByTitle = (title) => {
    switch (title) {

        case "Anoop sharma":
        return "images/anoop.jpg";
        case "Ramesh":
        return "images/ramesh.jpg";
        case "Shankar Kumar":
        return "images/shankar.jpg";
        case "Suresh":
        return "images/suresh.jpg";
        case "Yogesh":
        return "images/yogesh.jpg";
        
        default:
        return "images/dp0.jpg";
    }
};

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src={getImageSrcByTitle({title})} alt="." />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle" style={{}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
            <div className="tags"> 
                <img style={{ height: "100%", width: "auto", marginRight: "10px", marginLeft: "10px"}} src="icons/3-dot-menu.svg" alt="."/>
            </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;