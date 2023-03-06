function rot13(str) {
  let cipher = "";
  for (let char of str) {
    let charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      if (charCode + 13 > 90) {
        cipher = cipher + String.fromCharCode(64 + ((charCode + 13) % 90));
      } else {
        cipher = cipher + String.fromCharCode(charCode + 13);
      }
    } else {
      cipher = cipher + char;
    }
  }
  return cipher;
}

console.log(rot13("SERR PBQR PNZC"));
