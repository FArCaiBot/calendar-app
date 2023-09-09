import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  CalendarEvent,
  CalendarModal,
  FabAddNew,
  FabDelete,
  Navbar,
} from "../";

import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";

import { useCalendarStore, useUiStore } from "../../hooks";

export const CalendarPage = () => {
  const { events, setActiveEvent } = useCalendarStore();
  const { openDateModal } = useUiStore();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const eventStyleGetter = () => {
    const style = {
      backgroundColor: "#347C7F",
      borderRadius: "0px",
    };

    return {
      style,
    };
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  return (
    <>
      <Navbar />
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          culture="es"
          messages={getMessagesES()}
          defaultView={lastView}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "calc( 100vh - 80px)" }}
          eventPropGetter={eventStyleGetter}
          components={{
            event: CalendarEvent,
          }}
          onDoubleClickEvent={openDateModal}
          onSelectEvent={onSelect}
          onView={onViewChanged}
        />
        <CalendarModal />
        <FabAddNew />
        <FabDelete />
      </div>
    </>
  );
};
