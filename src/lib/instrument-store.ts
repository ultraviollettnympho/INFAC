import { create } from "zustand";

type InstrumentState = {
  roomsOpen: boolean;
  findOpen: boolean;
  readingPlain: boolean;
  setRooms: (open: boolean) => void;
  setFind: (open: boolean) => void;
  toggleReading: () => void;
};

export const useInstrument = create<InstrumentState>((set) => ({
  roomsOpen: false,
  findOpen: false,
  readingPlain: false,
  setRooms: (open) =>
    set((s) => ({ roomsOpen: open, findOpen: open ? false : s.findOpen })),
  setFind: (open) =>
    set((s) => ({ findOpen: open, roomsOpen: open ? false : s.roomsOpen })),
  toggleReading: () => set((s) => ({ readingPlain: !s.readingPlain })),
}));
