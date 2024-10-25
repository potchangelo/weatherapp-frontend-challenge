import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface SettingsState {
  temperatureUnit: TemperatureUnit;
  setTemperatureUnit: (temperatureUnit: TemperatureUnit) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    set => ({
      temperatureUnit: "C",
      setTemperatureUnit(temperatureUnit) {
        set(_ => ({
          temperatureUnit: temperatureUnit,
        }));
      },
    }),
    {
      name: "settings-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
