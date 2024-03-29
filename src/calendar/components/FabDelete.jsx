import { useCalendarStore, useUiStore } from "../../hooks";

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();
  const { isDateModalOpen } = useUiStore();

  const handleClickDelete = () => {
    startDeletingEvent();
  };

  return (
    <button
      style={{ display: hasEventSelected && !isDateModalOpen ? "" : "none" }}
      className="btn btn-danger fab-danger"
      onClick={handleClickDelete}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
