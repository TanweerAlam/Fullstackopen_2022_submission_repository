import React from "react";

const Part = ({ part }) => {
  console.log("Part component: ", part);
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

export default Part;
