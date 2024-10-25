import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CoordsState {
  coords: Coord[];
  addCoord: (coord: Coord) => void;
  removeCoord: (coord: Coord) => void;
  removeAllCoords: () => void;
}

export const useCoordsStore = create<CoordsState>()(
  persist(
    (set, get) => ({
      coords: [],
      addCoord(coord) {
        const selectedPlace = get().coords.find(c => c.lat === coord.lat && c.lon === coord.lon);
        if (selectedPlace) return;
        set(state => ({
          coords: [...state.coords, coord],
        }));
      },
      removeCoord(coord) {
        set(state => ({
          coords: state.coords.filter(c => c.lat !== coord.lat && c.lon !== coord.lon),
        }));
      },
      removeAllCoords() {
        set(_ => ({
          coords: [],
        }));
      },
    }),
    {
      name: "cooods-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
