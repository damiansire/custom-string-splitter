const fs = require("fs"); // Importamos el módulo de sistema de archivos

/**
 * Divide una cadena de texto en un array de tokens, respetando cadenas de texto entre comillas
 * simples o dobles y separando por caracteres especiales y espacios.
 *
 * @param {string} rawData - La cadena de texto a dividir.
 * @param {string[]} specialCharacters - Un array de caracteres especiales que se usarán como separadores.
 * @returns {string[]} Un array de tokens resultantes, donde cada token es una palabra, un carácter especial, o una cadena entre comillas.
 *
 * @example
 * // Ejemplo 1: División de una llamada a console.log
 * // Entrada:
 * // customSplit('console.log("Hello, world!")', ['{', '}', ';', ':', ',', '[', ']', '(', ')', '=', '+']);
 * // Salida esperada:
 * // ['console.log', '(', '"Hello, world!"', ')']
 *
 * @example
 * // Ejemplo 2: División de una asignación de cadena
 * // Entrada:
 * // customSplit("const myString = 'This is a test'", ['{', '}', ';', ':', ',', '[', ']', '(', ')', '=', '+']);
 * // Salida esperada:
 * // ['const', 'myString', '=', "'This is a test'"]
 *
 * @throws {TypeError} Si rawData no es una cadena o specialCharacters no es un array.
 */
export const customSplit = (rawData: string, specialCharacters: string[]) => {
  let secuenceArray: string[] = []; // Array que almacenará los tokens resultantes
  let currentWord = ""; // Variable para ir construyendo el token actual
  let inDoubleQuoteString = false; // Bandera para identificar si estamos dentro de comillas dobles
  let inSingleQuoteString = false; // Bandera para identificar si estamos dentro de comillas simples

  // Recorremos cada carácter del input
  for (let i = 0; i < rawData.length; i++) {
    const char = rawData[i]; // Carácter actual

    // Detectamos si el carácter actual es una comilla doble que no está escapada
    if (char === '"' && !inSingleQuoteString && (i === 0 || rawData[i - 1] !== "\\")) {
      if (!inDoubleQuoteString) {
        // Si no estábamos dentro de un string con comillas dobles, este es el inicio de uno
        if (currentWord.length > 0) {
          // Si teníamos una palabra en construcción, la añadimos al array
          secuenceArray.push(currentWord.trim());
          currentWord = ""; // Reiniciamos la palabra actual
        }
        currentWord += char; // Añadimos la comilla de apertura
        inDoubleQuoteString = true; // Marcamos que estamos dentro de un string con comillas dobles
      } else {
        // Si ya estábamos dentro de un string con comillas dobles, este es el final
        currentWord += char; // Añadimos la comilla de cierre
        secuenceArray.push(currentWord); // Añadimos el string completo al array
        currentWord = ""; // Reiniciamos la palabra actual
        inDoubleQuoteString = false; // Marcamos que ya no estamos dentro de un string con comillas dobles
      }
    }
    // Detectamos si el carácter actual es una comilla simple que no está escapada
    else if (char === "'" && !inDoubleQuoteString && (i === 0 || rawData[i - 1] !== "\\")) {
      if (!inSingleQuoteString) {
        // Si no estábamos dentro de un string con comillas simples, este es el inicio de uno
        if (currentWord.length > 0) {
          // Si teníamos una palabra en construcción, la añadimos al array
          secuenceArray.push(currentWord.trim());
          currentWord = ""; // Reiniciamos la palabra actual
        }
        currentWord += char; // Añadimos la comilla de apertura
        inSingleQuoteString = true; // Marcamos que estamos dentro de un string con comillas simples
      } else {
        // Si ya estábamos dentro de un string con comillas simples, este es el final
        currentWord += char; // Añadimos la comilla de cierre
        secuenceArray.push(currentWord); // Añadimos el string completo al array
        currentWord = ""; // Reiniciamos la palabra actual
        inSingleQuoteString = false; // Marcamos que ya no estamos dentro de un string con comillas simples
      }
    }
    // Si estamos dentro de cualquier tipo de string, simplemente añadimos el carácter
    else if (inDoubleQuoteString || inSingleQuoteString) {
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
