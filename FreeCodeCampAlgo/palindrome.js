function palindrome(str) {
  const alphaNum = /[a-z0-9]/;

  const arr = Array.from(str.toLowerCase()).filter((letter) =>
    alphaNum.test(letter)
  );

  const reversed = [...arr].reverse();

  return reversed.toString() == arr.toString();
}

palindrome("1 eye for of 1 eye.");
