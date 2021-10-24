import { useState } from "react";

import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";
import options from "./components/FeedbackOptions/button.json";
import s from "./App.module.css";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = countTotalFeedback;
  const positivePercentage = countPositiveFeedbackPercentage;

  const onLeaveFeedback = ({ name }) => {
    if (name === "Good") setGood((prevState) => prevState + 1);
    else if (name === "Neutral") setNeutral((prevState) => prevState + 1);
    else if (name === "Bad") setBad((prevState) => prevState + 1);
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage(total, good) {
    const percent = ((100 * good) / total).toFixed(2);
    return (percent !== "NaN" ? percent : "0") + "%";
  }

  return (
    <div className={s.App}>
      <Section title="Plise leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      {good > 0 || neutral > 0 || bad > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistics>
        </Section>
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </div>
  );
}

export default App;
