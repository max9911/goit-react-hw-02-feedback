import css from './feedback.module.css';

const Feedback = ({ oneClick }) => {
  return (
    <div className={css.container}>
      <h2>Please leave feedback </h2>
      <div className={css.btnList}>
        <button id="1" className={css.btn} onClick={oneClick}>
          Good
        </button>
        <button id="2" className={css.btn} onClick={oneClick}>
          Neutral
        </button>
        <button id="3" className={css.btn} onClick={oneClick}>
          Bad
        </button>
      </div>
    </div>
  );
};

export default Feedback;
