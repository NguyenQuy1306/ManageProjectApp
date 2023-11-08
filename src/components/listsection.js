import React, { useEffect, useState } from "react";

import Boardofsection from "./boardofsection";
import Section from "./section";
//import "./kanban.css";
import "./listsection.css";
import Editable from "../components/Components_of_kanban/Editabled/Editable";
import { Box } from "react-feather";
import { FaBox } from "react-icons/fa";
// import UserProfile from "../src/Views/userProfile";
function Listsection() {
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("prac-kanban")) || []
  );

  const [targetCard, setTargetCard] = useState({
    cid: "",
  });

  const addcardHandler = (name) => {
    const tempCards = [...cards];
    tempCards.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setCards(tempCards);
  };

  const removeCard = (id) => {
    const index = cards.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempCards = [...cards];
    tempCards.splice(index, 1);
    setCards(tempCards);
  };
  //   const dragEnded = (bid, cid) => {
  //     let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
  //     s_boardIndex = boards.findIndex((item) => item.id === bid);
  //     if (s_boardIndex < 0) return;

  //     s_cardIndex = boards[s_boardIndex]?.cards?.findIndex(
  //       (item) => item.id === cid
  //     );
  //     if (s_cardIndex < 0) return;

  //     t_boardIndex = boards.findIndex((item) => item.id === targetCard.bid);
  //     if (t_boardIndex < 0) return;

  //     t_cardIndex = boards[t_boardIndex]?.cards?.findIndex(
  //       (item) => item.id === targetCard.cid
  //     );
  //     if (t_cardIndex < 0) return;

  //     const tempBoards = [...boards];
  //     const sourceCard = tempBoards[s_boardIndex].cards[s_cardIndex];
  //     tempBoards[s_boardIndex].cards.splice(s_cardIndex, 1);
  //     tempBoards[t_boardIndex].cards.splice(t_cardIndex, 0, sourceCard);
  //     setBoards(tempBoards);

  //     setTargetCard({
  //       bid: "",
  //       cid: "",
  //     });
  //   };

  //   const dragEntered = (bid, cid) => {
  //     if (targetCard.cid === cid) return;
  //     setTargetCard({
  //       bid,
  //       cid,
  //     });
  //   };
  const updateCard = (cid, card) => {
    const tempCards = [...cards];
    const cardIndex = tempCards.findIndex((item) => item.id === cid);
    if (cardIndex !== -1) {
      tempCards[cardIndex] = card;
      setCards(tempCards);
    }
  };

  useEffect(() => {
    localStorage.setItem("prac-kanban", JSON.stringify(cards));
  }, [cards]);

  return (
    <>
      <div className="app">
        <div className="app_nav">
          <h1>Section</h1>
        </div>
        <div className="app_boards_container">
          <div className="app_sections">
            {cards.map((item) => (
              <Section
                key={item.id}
                card={item}
                //boardId={props.board.id}
                removeCard={removeCard}
                // dragEntered={dragEntered}
                // dragEnded={dragEnded}
                updateCard={updateCard}
              />
            ))}
            <div className="app_boards_last">
              <Editable
                displayClass="app_boards_add-board"
                editClass="app_boards_add-board_edit"
                placeholder="Enter Board Name"
                text="Add Section"
                buttonText="Add Section"
                onSubmit={addcardHandler}
              />
            </div>
          </div>
        </div>
      </div>
      <div>{/* <UserProfile /> */}</div>
    </>
  );
}

export default Listsection;
