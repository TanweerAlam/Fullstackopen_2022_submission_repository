import React, { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let average = all > 0 ? (good - bad) / all : 0;
  average = average < 0 ? 0 : average;
  let positive = all > 0 ? (good / all) * 100 : 0;
  return (
    <>
      <h1>statistics</h1>
      {!all ? (
        "No feedback given"
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
          </tbody>
        </table>
      )}
    </>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleClickGood = () => {
    console.log("Good clicked");
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    console.log("Good clicked");
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    console.log("Good clicked");
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />
      <Button handleClick={handleClickBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
