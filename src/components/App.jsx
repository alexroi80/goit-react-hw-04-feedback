import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const countFeedback = evt => {
    const { name } = evt.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
    }
  };

  const countTotalFeedback = () => {
    
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback()) * 100
    );
    return positiveFeedbackPercentage ? positiveFeedbackPercentage : 0;
  };

  // const { good, neutral, bad } = this.state;
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={[{good},{neutral},{bad}]} onLeaveFeedback={countFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
