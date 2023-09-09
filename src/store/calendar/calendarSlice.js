import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = [
  {
    _id: new Date().getTime(),
    title: "Cumpleaños del jefe",
    notes: "Hay que hacer los preparativos",
    start: new Date(),
    end: addHours(new Date(), 1),
    bgColor: "#fafafa",
    user: {
      id: 1,
      name: "Flavio Armijos",
    },
  },
];

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [...tempEvent],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, actions) => {
      state.activeEvent = actions.payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((ev) => {
        if (ev._id === payload._id) {
          return payload;
        }
        return ev;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
  },
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =
  calendarSlice.actions;
