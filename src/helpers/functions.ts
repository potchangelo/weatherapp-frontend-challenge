export function kelvinToUnit(kelvin: number, toUnit: TemperatureUnit) {
  if (toUnit === "K") return kelvin;
  if (toUnit === "F") return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
  return Math.round(kelvin - 273.15);
}

export function displayKelvinToUnit(kelvin: number, toUnit: TemperatureUnit) {
  const unit = toUnit === "K" ? "K" : `°${toUnit}`;
  return `${kelvinToUnit(kelvin, toUnit)} ${unit}`;
}
