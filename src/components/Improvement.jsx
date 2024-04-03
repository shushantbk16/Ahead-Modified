"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0.1;
   
  }

  to {
    opacity: 1;
    
  }
`;
const SelfImprovement = () => {
  return (
    <section className="px-20 mt-10 mb-24 ">
      <div className="flex flex-row justify-between items-center">
        <motion.div
          className="inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <div className="text-xl font-bold text-black">
            Wrong with self improvement & how we&apos;re fixing it.
          </div>
          <div className="text-6xl pb-3 font-bold text-black">
            Self Improvement. Ugh.
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{
            duration: 2.1,
            ease: "easeInOut",
            type: "spring",
            delay: 0.3,
          }}
          intial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -500],
              y: [35, 20, 10, 0, -10],
              rotate: [-60, -45, -35, -35, -35, -35, -15],
            },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="flex items-center justify-center"
        >
          <Image
            src="/blue-ghost.png"
            alt="download applestore"
            width={70}
            height={70}
          />
        </motion.div>
      </div>

      <div className="timeline px-20 pt-14 h-96 overflow-y-auto mt-10">
        <div className="border-l-2 border-l-violet-300   flex  flex-col gap-16">
          <Reveal keyframes={customAnimation}>
            <motion.div className=" max-w-[40rem] relative align-top pl-8">
              <div style={{ left: "-12px" }} className="absolute">
                🟣
              </div>
              <p className="text-xl font-bold">It&apos;s not easy as 1-2-3</p>
              <p className="mt-3">
                The journey may be long but our sessions are quick. We get to
                the point and tell you what you want to know (and nothing else).
              </p>
            </motion.div>
            <motion.div className=" max-w-[40rem] relative align-top pl-8">
              <div style={{ left: "-12px" }} className="absolute">
                🟣
              </div>
              <p className="text-xl font-bold">Old habits are hard to break</p>
              <p className="mt-3">
                And bad behaviours die hard.Fortunately,we give you
                great,science-backed techniques to use.
              </p>
            </motion.div>
            <motion.div className=" max-w-[40rem] relative align-top pl-8">
              <div style={{ left: "-12px" }} className="absolute">
                🟣
              </div>
              <p className="text-xl font-bold">
                You and your motivation dont have a long term relationship.
              </p>
              <p className="mt-3">
                Luckily,we can proactively prepare you for the marathon ,not
                just the race.Effective,memorable exercise help you stick to
                your goals.
              </p>
            </motion.div>
            <motion.div className=" max-w-[40rem] relative align-top pl-8">
              <div style={{ left: "-12px" }} className="absolute">
                🟣
              </div>
              <p className="text-xl font-bold">
                Books just dont offer practical solutions
              </p>
              <p className="mt-3">
                Remember when you learned to ride a bike just by reading?Yeah we
                dont either. We help you take concrete small steps towards your
                goals.Learning just a bit then immediately spinning into action.
              </p>
            </motion.div>
            <motion.div className=" max-w-[40rem] relative align-top pl-8">
              <div style={{ left: "-12px" }} className="absolute">
                🟣
              </div>
              <p className="text-xl font-bold">
                Inspiration is great but then what.
              </p>
              <p className="mt-3">
                We make sure your energy from all the content you consume does
                not fizzle out..
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SelfImprovement;
