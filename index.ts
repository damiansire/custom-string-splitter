const fs = require("fs"); // Importamos el módulo de sistema de archivos

export const customSplit = (rawData: string) => {
  // Definimos los caracteres especiales que queremos identificar como tokens individuales
  const specialCharacters = ["{", "}", ";", ":", ",", "=", "+", "(", ")"];

  let secuenceArray: string[] = []; // Array que almacenará los tokens resultantes
  let currentWord = ""; // Variable para ir construyendo el token actual
  let inString = false; // Bandera para identificar si estamos dentro de un string

  // Recorremos cada carácter del input
  for (let i = 0; i < rawData.length; i++) {
    const char = rawData[i]; // Carácter actual

    // Detectamos si el carácter actual es una comilla que no está escapada
    if (char === '"' && (i === 0 || rawData[i - 1] !== "\\")) {
      if (!inString) {
        // Si no estábamos dentro de un string, este es el inicio de uno
        if (currentWord.length > 0) {
          // Si teníamos una palabra en construcción, la añadimos al array
          secuenceArray.push(currentWord.trim());
          currentWord = ""; // Reiniciamos la palabra actual
        }
        currentWord += char; // Añadimos la comilla de apertura
        inString = true; // Marcamos que estamos dentro de un string
      } else {
        // Si ya estábamos dentro de un string, este es el final
        currentWord += char; // Añadimos la comilla de cierre
        secuenceArray.push(currentWord); // Añadimos el string completo al array
        currentWord = ""; // Reiniciamos la palabra actual
        inString = false; // Marcamos que ya no estamos dentro de un string
      }
    } else if (inString) {
      // Si estamos dentro de un string, añadimos el carácter actual sin procesarlo
      currentWord += char;
    } else if (specialCharacters.includes(char)) {
      // Si es un carácter especial y no estamos en un string
      if (currentWord.length > 0) {
        // Si teníamos una palabra en construcción, la añadimos al array
        secuenceArray.push(currentWord.trim());
        currentWord = ""; // Reiniciamos la palabra actual
      }
      secuenceArray.push(char); // Añadimos el carácter especial como un token individual
    } else if (char === " " || char === "\r" || char === "\n" || char === "\t") {
      // Si es un espacio, retorno de carro, salto de línea o tabulación fuera de un string
      if (currentWord.length > 0) {
        // Si teníamos una palabra en construcción, la añadimos al array
        secuenceArray.push(currentWord.trim());
        currentWord = ""; // Reiniciamos la palabra actual
      }
      // Ignoramos el carácter en sí (no lo añadimos como token)
    } else {
      // Para cualquier otro carácter fuera de un string
      currentWord += char; // Lo añadimos a la palabra actual
    }
  }

  // Si queda alguna palabra en construcción al final, la añadimos
  if (currentWord.length > 0) {
    secuenceArray.push(currentWord.trim());
  }

  return secuenceArray; // Devolvemos el array de tokens
};
