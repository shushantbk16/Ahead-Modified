"use client";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const questions = [
  {
    id: 0,
    question: "What is useState() in React?",
  },
  {
    id: 1,
    question: "What is JSX?",
  },
  {
    id: 2,
    question:
      "What are the differences between functional and class components?",
  },
  {
    id: 3,
    question: "What are props in React?",
  },
  {
    id: 4,
    question: "Explain React state and props.",
  },
];
const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const handleClose = () => setOpen(false);
  function handleOnClick() {
    console.log(currentAnswer);
    if (currentQuestion == 4) {
      handleClose();
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentAnswer("");
    }
  }

  return (
    <div>
      <button
        onClick={handleOpen}
        className="rounded-3xl p-4 px-6 text-white bg-black"
      >
        Start Test
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Question no {currentQuestion + 1}
          </Typography>
          <h1 className="pt-4 pb-4">{questions[currentQuestion].question}</h1>
          <input
            placeholder="Answer here"
            value={currentAnswer}
            onChange={(e) => {
              setCurrentAnswer(e.target.value);
            }}
            className="pb-4"
          ></input>
          <div className="flex justify-between">
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleOnClick}>
              {currentQuestion == 4 ? "Done" : "Next"}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Questions;
