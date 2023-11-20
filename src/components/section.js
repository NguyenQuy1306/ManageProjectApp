import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";

import Dropdown from "./Components_of_kanban/Dropdown/Dropdown";
import "./section.css";
//import "./Card.css";
import SectionInfo from "./sectioninfor";
import { useMyContext } from "../../src/components/context";
function Section(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { boardCountsRef } = useMyContext();
  const {
    id,
    title,
    desc,
    date,
    tasks,
    labels,
    weight,
    weightcolor,
    priority,
    prioritycolor,
  } = props.card;

  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (!date) return "";

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Aprl",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    return day + " " + month;
  };

  return (
    <>
      {showModal && (
        <SectionInfo
          onClose={() => setShowModal(false)}
          card={props.card}
          //  boardId={props.boardId}
          updateCard={props.updateCard}
        />
      )}
      <div
        className="card"
        draggable
        //onDragEnd={() => props.dragEnded(id)}
        //onDragEnter={() => props.dragEntered(id)}
        onClick={() => setShowModal(true)}
      >
        <div className="card1">
          <div className="card_top1">
            <div className="card_top_labels">
              {labels?.map((item, index) => (
                <>
                  <label
                    key={index}
                    style={{ backgroundColor: item.color || "#000000" }}
                  >
                    {item.text}
                  </label>
                </>
              ))}
              <>
                {/* <label style={{ backgroundColor: weightcolor || "#000000" }}>
                Weight: {weight}
              </label>
              <label style={{ backgroundColor: prioritycolor || "#000000" }}>
                Priority: {priority}
              </label> */}
              </>
            </div>
            <div
              className="card_top_more"
              onClick={(event) => {
                event.stopPropagation();
                setShowDropdown(true);
              }}
            >
              <MoreHorizontal />
              {showDropdown && (
                <Dropdown
                  class="board_dropdown"
                  onClose={() => setShowDropdown(false)}
                >
                  <p onClick={() => setShowModal(true)}>Edit Section</p>
                  <p onClick={() => props.removeCard(id)}>Delete Section</p>
                </Dropdown>
              )}
            </div>
          </div>

          <div className="card_title1">{title}</div>
          <hr
            className="myline"
            style={{
              color: "black",
              backgroundColor: "black",
              height: 2,
              zIndex: 0,
            }}
          />
          <label className="mydesc">
            <span style={{ fontWeight: "bold" }}>Mô tả:</span> {desc}
          </label>
          <div className="card_footer1">
            <div className="time">
              {
                <p className="card_footer_item">
                  <Clock className="card_footer_icon" />
                  {formatDate(date)}
                </p>
              }
            </div>
            {/* {tasks && tasks?.length > 0 && (
            <p className="card_footer_item">
              <CheckSquare className="card_footer_icon" />
              {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
            </p>
          )} */}
          </div>
          <div className="card_footer12">
            Member &nbsp; &nbsp; Completed Tasks:{" "}
            {boardCountsRef.current.COMPLETE}/
            {boardCountsRef.current.COMPLETE +
              boardCountsRef.current.TODO +
              boardCountsRef.current.IN_PROGRESS}
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
