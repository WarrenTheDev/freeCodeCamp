function convertToRoman(num) {
  const romanNum = new Map();

  let currNum = num;
  let currRomanNumStr = "";

  romanNum
    .set("M", 1000)
    .set("CM", 900)
    .set("D", 500)
    .set("CD", 400)
    .set("C", 100)
    .set("XC", 90)
    .set("L", 50)
    .set("XL", 40)
    .set("X", 10)
    .set("IX", 9)
    .set("V", 5)
    .set("IV", 4)
    .set("I", 1);

  romanNum.forEach((value, key) => {
    let divison = currNum / value;

    if (divison >= 1) {
      let strToAdd = key.repeat(divison);

      currRomanNumStr = currRomanNumStr + strToAdd;

      currNum = currNum % value;
    }
  });

  return currRomanNumStr;
}

console.log(convertToRoman(400));
