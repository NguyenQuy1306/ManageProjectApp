import React, { useState } from "react";
import { CheckSquare, Clock, MoreHorizontal } from "react-feather";

import Dropdown from "./Components_of_kanban/Dropdown/Dropdown";

//import "./Card.css";
import GoalInfo from "./goalinfo";

function Goal(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    id,
    title,
    date,
    tasks,
    labels,
    
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
        <GoalInfo
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
        <div className="card_top">
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
                <p onClick={() => setShowModal(true)}>Edit Goal</p>
                <p onClick={() => props.removeCard(id)}>Delete Goal</p>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="card_title">{title}</div>
        <div className="card_footer">
          {date && (
            <p className="card_footer_item">
              <Clock className="card_footer_icon" />
              {formatDate(date)}
            </p>
          )}
          {tasks && tasks?.length > 0 && (
            <p className="card_footer_item">
              <CheckSquare className="card_footer_icon" />
              {tasks?.filter((item) => item.completed)?.length}/{tasks?.length}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Goal;
