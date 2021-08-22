import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.list}>
      {options.map(option => (
        <li className={s.item} key={option}>
          <button
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FeedbackOptions;
