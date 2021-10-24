import PropTypes from "prop-types";
import s from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <div className={s.container}>
      <h2 className={s.message}>{message}</h2>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
