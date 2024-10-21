export function kelvinToUnit(kelvin: number, to: "C"|"F") {
  if (to === "F") {
    return Math.round((kelvin - 273.15) * 9 / 5 + 32);
  }
  return Math.round(kelvin - 273.15);
}
