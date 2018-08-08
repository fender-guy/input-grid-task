// taken and modified from https://stackoverflow.com/a/40724354/1308789

const SI_SYMBOL = ["", "K", "M", "B", "T", "P", "E"];

export const abbreviateNumber = (number) => {
  // what tier? (determines SI symbol)
  const tier = (Math.log10(number) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier === 0) return number;

  // get suffix and determine scale
  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);

  // scale the number
  const scaled = number / scale;
  const scaledLength = scaled.toString().split(".")[0].length;

  // format number and add suffix
  if (scaledLength === 3) {
    return scaled.toFixed(0) + suffix;
  }
  if (scaledLength === 1) {
    return scaled.toFixed(2) + suffix;
  }
  return scaled.toFixed(1) + suffix;
}
