"use client";
import React, { useEffect } from "react";
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
const TextInput = ({
  vacancies,
  setVacancies,
  vac,
  deleteItem,
  index,
  buttonTitle,
}) => {
  const [jobTitle, setJobTitle] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [pay, setPay] = useState("");
  useEffect(() => {
    if (vac) {
      setJobTitle(vac.jobTitle);
      setPosition(vac.position);
      setLocation(vac.location);
      setPay(vac.pay);
    }
  }, []);

  const vacancy = {
    jobTitle: String,
    position: String,
    location: String,
    pay: String,
  };
  function handleOnClick() {
    (vacancy.jobTitle = jobTitle),
      (vacancy.position = position),
      (vacancy.location = location),
      (vacancy.pay = pay),
      setVacancies([...vacancies, vacancy]);
    setJobTitle("");
    setPosition("");
    setLocation("");
    setPay("");
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="mx-10 cursor-pointer text-white bg-black rounded-full px-3 py-2 mt-4"
      >
        {buttonTitle}
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Vacancy
          </Typography>
          <div className="flex gap-4 justify-between">
            <label className="font-bold"> JobTitle</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => {
                setJobTtile(e.target.value);
              }}
              placeholder="Title"
            />
          </div>
          <div className="flex gap-4 justify-between ">
            <label className="font-bold">Position</label>
            <input
              type="text"
              value={position}
              onChange={(e) => {
                setPosition(e.target.value);
              }}
              placeholder="position"
            />
          </div>
          <div className="flex gap-4 justify-between">
            <label className="font-bold">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              placeholder="location"
            />
          </div>
          <div className="flex gap-4 justify-between">
            <label className="font-bold">Pay</label>
            <input
              type="text"
              value={pay}
              onChange={(e) => {
                setPay(e.target.value);
              }}
              placeholder="pay"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleOnClick}
              className="bg-black text-white p-2 m-2 rounded-2xl w-24"
            >
              Add
            </button>
            <button
              onClick={handleClose}
              className="bg-black text-white p-2 m-2 rounded-2xl w-24"
            >
              Cancel
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default TextInput;

{
  /* <div>
      <div>
        <label>jobTitle</label>
        <input
          type="text"
          value={jobTtile}
          onChange={(e) => {
            setJobTtile(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Position</label>
        <input
          type="text"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Pay</label>
        <input
          type="text"
          value={pay}
          onChange={(e) => {
            setPay(e.target.value);
          }}
        />
      </div>
      <button onClick={handleOnClick}>Add</button>
    </div> */
}
