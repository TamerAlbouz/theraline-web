import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { calendarEventModel } from "../../types/calendarEvent.d";

interface CalendarState {
  selectedEvent: calendarEventModel | undefined;
  showWeekends: boolean;
  setSelectedEvent: (newEvent: calendarEventModel | undefined) => void;
  setShowWeekends: (newValue: boolean) => void;
}

const useCalendarStore = create<CalendarState>()(
  devtools(
    persist(
      (set) => ({
        selectedEvent: undefined,
        showWeekends: false,
        setSelectedEvent: (newEvent: calendarEventModel | undefined) =>
          set((_: any) => ({ selectedEvent: newEvent })),
        setShowWeekends: (newValue: boolean) =>
          set((_: any) => ({ showWeekends: newValue })),
      }),
      {
        name: "notes-storage",
      },
    ),
  ),
);

export { useCalendarStore };
