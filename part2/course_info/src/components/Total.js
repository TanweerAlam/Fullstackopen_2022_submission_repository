import React from "react";

const Total = ({ parts }) => {
  console.log("Total component :", parts);
  const totalExercises = parts.reduce((preValue, nextValue) => {
    return preValue + nextValue.exercises;
  }, 0);
  console.log(totalExercises);
  return (
    <p>
      <b>total of {totalExercises} exercises</b>
    </p>
  );
};

export default Total;
