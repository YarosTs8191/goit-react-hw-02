import css from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <section className={css.notification}>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
