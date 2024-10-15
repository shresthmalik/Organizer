import React from "react";
import { useSelector } from "react-redux";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import "./DashView.css";
import Card from "../Card/Card";

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );


const getImageSrcByTitle = (title) => {
  switch (title) {
    case "In progress":
      return "icons/in-progress.svg";
    case "Todo":
      return "icons/Todo.svg";
    case "Backlog":
      return "icons/Backlog.svg";

    case "Urgent":
      return "icons/SVG - Urgent Priority colour.svg";
    case "High":
      return "icons/Img - High Priority.svg";
    case "Medium":
      return "icons/Img - Medium Priority.svg";
    case "Low":
      return "icons/Img - Low Priority.svg";
    case "No priority":
      return "icons/No-priority.svg";
    
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
      return "logo.png";
  }
};

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <div
                        className="imageContainer relative"
                        style={{ width: "15px", height: "auto", display : 'inline-block' }}
                      >
                        {}
                        <img
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "50%",
                          }}
                          src={getImageSrcByTitle(elem[index]?.title)}
                          alt="."
                        />
                      </div>
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "20px", height: "auto", display : 'inline-block', marginRight: "10px" }}
                        >
                          {}
                          <img
                            style={{
                              height: "100%",
                              width: "100%",
                              borderRadius: "50%",
                            }}
                            
                            src={getImageSrcByTitle(elem[index]?.title)}
                            alt="."
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <div>
                      <img style={{height: "100%", width: "auto", marginRight: "10px", marginLeft: "10px"}} src="icons/add.svg" alt="."/>
                    </div>
                    <div>
                        <img style={{ height: "100%", width: "auto", marginRight: "10px", marginLeft: "10px"}} src="icons/3-dot-menu.svg" alt="."/>
                    </div>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;
