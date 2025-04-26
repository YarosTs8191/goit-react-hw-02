import { useState } from "react";
import css from "./Options.module.css";

const Options = ({ onLeaveFeedback, onResetFeedback, totalFeedback }) => {
  const [isResetting, setIsResetting] = useState(false);

  const handleResetClick = () => {
    setIsResetting(true);

    setTimeout(() => {
      onResetFeedback();
      setIsResetting(false);
    }, 1000);
  };

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
        <button
          className={`${css.reset} ${isResetting ? css.resetting : ""}`}
          onClick={handleResetClick}
        >
          Reset
        </button>
      )}
    </section>
  );
};

export default Options;
