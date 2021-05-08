export function convertNumberToAbbreviation(number) {
  var suffixes = ["", "K", "M", "B", "T"];
  var suffixNum = Math.floor(("" + number).length / 3);
  var shortValue = parseFloat(
    (suffixNum !== 0 ? number / Math.pow(1000, suffixNum) : number).toPrecision(
      2
    )
  );
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  console.log(shortValue);
  console.log(suffixes[suffixNum]);

  return shortValue + suffixes[suffixNum];
}

export const appendPrefixOrSuffix = (value, title) => {
  switch (title) {
    case "Div/Yeild":
      return `${value}%`;
    case "QEPS":
      return `$${value}`;
    default:
      return value;
  }
};
