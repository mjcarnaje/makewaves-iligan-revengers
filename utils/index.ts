export function commaFormat(num: number) {
  return num
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    .replace(".00", "");
}
