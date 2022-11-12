import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  console.log("Parts in Content component: ", parts);
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

export default Content;
