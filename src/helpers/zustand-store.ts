import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"


interface PlacesState {
  places: Place[],
  addPlace: (place: Place) => void;
  removePlace: (place: Place) => void;
  removeAllPlaces: () => void;
}

export const usePlacesStore = create<PlacesState>()(
  persist((set, get) => ({
    places: [],
    addPlace(place) {
      const selectedPlace = get().places.find(p => (
        p.lat === place.lat && p.lon === place.lon
      ));
      if (selectedPlace) return;
      set(state => ({
        places: [...state.places, place]
      }));
    },
    removePlace(place) {
      set(state => ({
        places: state.places.filter(c => c.lat !== place.lat && c.lon !== place.lon)
      }));
    },
    removeAllPlaces() {
      set(_ => ({
        places: []
      }));
    },
  }), {
    name: "places-storage",
    storage: createJSONStorage(() => localStorage)
  })
);
