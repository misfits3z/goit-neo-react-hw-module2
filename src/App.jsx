import { useState, useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

function App() {
  const[values, setValues] = useState(() => {
    const savedValues = localStorage.getItem("feedbackValues");
    return savedValues ? JSON.parse(savedValues) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedbackValues", JSON.stringify(values));
  }, [values]);


  const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedbackPercentage =
    totalFeedback > 0 ? Math.round((values.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (<Feedback
       values={values} 
       total={totalFeedback} 
       positivePercentage={positiveFeedbackPercentage}/>
      ) : (<Notification message="No feedback given yet" />)}
    </>
  );
}

export default App;