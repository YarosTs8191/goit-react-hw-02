import css from "./Options.module.css";

const Options = ({ onLeaveFeedback, onResetFeedback, totalFeedback }) => {
  return (
    <section className={css.options}>
      <button className={css.good} onClick={() => onLeaveFeedback("good")}>
        Good
      </button>
      <button
        className={css.neutral}
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.bad} onClick={() => onLeaveFeedback("bad")}>
        Bad
      </button>

      {totalFeedback > 0 && (
        <button className={css.reset} onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </section>
  );
};

export default Options;
