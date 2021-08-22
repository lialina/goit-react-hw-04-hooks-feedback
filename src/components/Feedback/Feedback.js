import s from './Feedback.module.css';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

function Feedback({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  total,
  percentage,
  handleBtnClick,
  options,
  onSelect,
}) {
  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleBtnClick} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <p>No feedback given</p>
        ) : (
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={total}
            positivePercentage={percentage}
          />
        )}
      </Section>
    </div>
  );
}

export default Feedback;
