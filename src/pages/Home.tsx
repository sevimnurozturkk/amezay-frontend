import React from "react";
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import Services from "../components/Services";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProblemSolution />
      <Services />
    </div>
  );
};

export default Home;
