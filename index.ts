const fs = require("fs");

export const customSplit = (rawData: string) => {
  const specialCharacters = ["{", "}", ";", ":"];

  let currentWord = "";
  let secuenceArray: string[] = [];

  for (let char of rawData) {
    if (specialCharacters.includes(char)) {
      if (currentWord.length > 0) {
        secuenceArray.push(currentWord.trim()); // Trim para eliminar espacios extra
        currentWord = "";
      }
      secuenceArray.push(char); // Incluye el caracter especial
    } else if (char === " ") {
      if (currentWord.length > 0) {
        secuenceArray.push(currentWord);
        currentWord = "";
      }
    } else if (char === "\r" || char === "\n") {
      if (currentWord.length > 0) {
        secuenceArray.push(currentWord);
        currentWord = "";
      }
    } else {
      currentWord += char;
    }
  }

  if (currentWord.length > 0) {
    secuenceArray.push(currentWord.trim()); // Asegura que la última palabra se añada
  }

  return secuenceArray;
};
