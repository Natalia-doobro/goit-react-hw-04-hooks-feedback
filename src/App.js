import { Component } from "react";

import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";
import options from "./components/FeedbackOptions/button.json";
import s from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = ({ name }) => {
    // this.setState((prevState) => ({
    //     [name]: prevState.name + 1,
    //   }))

    if (name === "Good")
      this.setState((prevState) => ({
        good: prevState.good + 1,
      }));
    else if (name === "Neutral")
      this.setState((prevState) => ({
        neutral: prevState.neutral + 1,
      }));
    else if (name === "Bad")
      this.setState((prevState) => ({
        bad: prevState.bad + 1,
      }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const percent = ((100 * good) / total).toFixed(2);
    return (percent !== "NaN" ? percent : "0") + "%";
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback;
    const positivePercentage = this.countPositiveFeedbackPercentage;

    return (
      <div className={s.App}>
        <Section title="Plise leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
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
}

export default App;
