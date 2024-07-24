import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = (good / all) * 100;
  const noFeedback = all === 0;
  return (
    <div>
      <h1>Statistics</h1>
      {noFeedback ?
        "No feedback given" :
        <>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="Positive feedback" value={positive} />
        </>
      }
    </div>
  )
};

const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}:</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
};

const Button = ({ text, onclick }) => {
  return (
    <button onClick={onclick}>{text}</button>
  )
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" onclick={() => setGood(good + 1)} />
      <Button text="neutral" onclick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onclick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
};

export default App;
