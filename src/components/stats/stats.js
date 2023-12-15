import css from './stats.module.css';

export default function Stats({ data }) {
  const total = data.good + data.neutral + data.bad;
  const positive = (((data.neutral + data.good) / total) * 100).toFixed(1);
  if (total > 0) {
    return (
      <div className={css.container}>
        <h2> Statistics </h2>
        <p className={css.string}>Good: {data.good}</p>
        <p className={css.string}>Neutral: {data.neutral}</p>
        <p className={css.string}>Bad: {data.bad}</p>
        <p className={css.string2}>Total: {total}</p>
        <p className={css.string2}>Positive: {positive} %</p>
      </div>
    );
  } else {
    return (
      <div className={css.container}>
        <h2> Statistics </h2>
        <p className={css.string}>No feedback given</p>
      </div>
    );
  }
}
