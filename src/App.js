import { useState, useEffect } from 'react';
import Container from 'components/Container/Container.js';
import Feedback from 'components/Feedback/Feedback';


export default function App() {
  const [feedback, setOption] = useState({good: 0, neutral: 0, bad: 0});
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  const options = Object.keys(feedback);

  const handleBtnClick = (option) => {
    setOption({
      ...feedback,
      [option]: feedback[option] + 1
    })
  };

  useEffect(() => {
    setTotal(feedback.good + feedback.neutral + feedback.bad)
    setPositiveFeedback(Math.round((feedback.good * 100) / total));
  }, [positiveFeedback, feedback, total])
  
  return (
    <Container>
      <Feedback
        options={options}
        handleBtnClick={handleBtnClick}
        goodFeedback={feedback.good}
        neutralFeedback={feedback.neutral}
        badFeedback={feedback.bad}
        total={total}
        percentage={positiveFeedback}
      />
    </Container>
  )
}