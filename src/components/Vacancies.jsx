"use client";
import React, { use, useState } from "react";
import { motion } from "framer-motion";
import TextInput from "../components/TextInput";

const data = [
  {
    jobTitle: "Senior Full Stack Engineer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Euro 65-85, 1.5%-2.5% Equity",
  },
  {
    jobTitle: "Senior Designer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Euro 45-85, 3.5%-7.5% Equity",
  },
  {
    jobTitle: "Superstar Intern",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "Euro 45-85, 8.5%-2.5% Equity",
  },
];

const OpenVacancies = ({ items }) => {
  const [inputText, setInputText] = useState(false);
  const [vacancies, setVacancies] = useState(data);

  function handleClick() {
    setInputText(!inputText);
  }
  return (
    <section className="mt-20 py-8 px-24 h-96">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { x: "-30%", y: "50%", opacity: 0 },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 1.5 },
          },
        }}
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div className="flex">
          <h1 className="text-5xl font-bold">Open Vacancies</h1>

          {items && (
            <TextInput
              vacancies={vacancies}
              setVacancies={setVacancies}
              buttonTitle="Add"
            />
          )}
        </div>
      </motion.div>
      <div className="p-10 flex space-x-8 gap-7 items-center overflow-x-auto hide-scrollbar h-250">
        {vacancies.map((vac, index) => {
          return (
            <HoverCard
              key={index}
              vac={vac}
              index={index}
              setVacancies={setVacancies}
              vacancies={vacancies}
              inputText={items}
            />
          );
        })}
      </div>
    </section>
  );
};

const HoverCard = ({ vac, index, setVacancies, vacancies, inputText }) => {
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [edit, setEdit] = useState(false);
  function handleEdit() {
    setEdit(!edit);
  }
  function deleteItem(index) {
    const newArray = [
      ...vacancies.slice(0, index),
      ...vacancies.slice(index + 1),
    ];
    setVacancies(newArray);
  }
  return (
    <>
      <motion.div
        initial={{ height: 200, width: 400 }}
        whileHover={{ height: 250 }}
        key={index}
        onHoverStart={() => setButtonVisible(true)}
        onHoverEnd={() => setButtonVisible(false)}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="bg-[#fefbec] rounded-lg hover:bg-[#ece7d1] hover:cursor-pointer w-[25%]"
      >
        <div className="rounded-2xl  p-6 px-12">
          <h2 className="text-xl font-bold">{vac.jobTitle}</h2>

          <ul className="mt-4 text-sm font-semibold list-disc pl-4">
            <li className="">{vac.position}</li>
            <li className="">{vac.location}</li>
            <li className="">{vac.pay}</li>
          </ul>

          {inputText && (
            <div className="flex justify-between">
              <TextInput
                vacancies={vacancies}
                setVacancies={setVacancies}
                vac={vac}
                deleteItem={() => deleteItem(index)}
                buttonTitle="Edit"
              />
              <motion.button
                initial="hidden"
                whileInView="visible"
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0.7 },
                }}
                className="mx-10 cursor-pointer text-white bg-black rounded-full px-3 py-2 mt-4"
                onClick={() => deleteItem(index)}
              >
                <h1>Delete</h1>
              </motion.button>
            </div>
          )}
        </div>
        {inputText && (
          <div className="flex ">
            {/* <motion.button
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.7 },
              }}
              className="mx-10 cursor-pointer text-white bg-black rounded-full px-3 py-2 mt-4"
              onClick={handleEdit}
            >
              Edit
            </motion.button> */}

            {/* <motion.button
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.7 },
              }}
              className="mx-10 cursor-pointer text-white bg-black rounded-full px-3 py-2 mt-4"
              onClick={() => deleteItem(index)}
            >
              <h1>Delete</h1>
            </motion.button> */}
          </div>
        )}
      </motion.div>
    </>
  );
};

export default OpenVacancies;
