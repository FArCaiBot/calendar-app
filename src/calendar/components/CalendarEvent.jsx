import PropTypes from "prop-types";

export const CalendarEvent = ({ event }) => {
  const { title, user } = event;

  return (
    <>
      <span>{title}</span>
      <strong> - {user.name}</strong>
    </>
  );
};

CalendarEvent.propTypes = {
  event: PropTypes.object,
};
