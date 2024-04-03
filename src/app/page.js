import Image from "next/image";
import Nav from "../components/Nav";
import Intro from "@/components/Intro";
import Eq from "../components/Eq";
import Familiar from "../components/Familiar";
import Skill from "../components/Skill";
import Work from "../components/Work";
import Built from "@/components/Built";
import Improvement from "@/components/Improvement";
import Best from "../components/Best";
import Vacancies from "../components/Vacancies";
import Test from "../components/Test";
import Footer from "../components/Footer";

export default function Home({ items }) {
  return (
    <>
      <Nav />
      <Intro />
      <Eq />
      <Familiar />
      <Built />
      <Improvement />
      <Best />
      <Skill />
      <Test />
      <Work />
      <Vacancies items={items} />
      <Footer />
    </>
  );
}
