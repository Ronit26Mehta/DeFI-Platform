// export const shortenAddress = (number, key) => {
//     const encryptedDigits = Array.from(String(number), digit =>
//         String((parseInt(digit) + 3) % 10)
//     );
//     return encryptedDigits.join('');
// };


export const shortenAddress = (hexNumber, key) => {
    // Convert hexadecimal number to decimal
    const decimalNumber = parseInt(hexNumber, 16);

    // Convert hexadecimal key to decimal
    const decimalKey = parseInt(key, 16);

    // Add key to decimal number
    const encryptedDecimal = (decimalNumber + decimalKey) % Math.pow(3, hexNumber.length);

    // Convert back to hexadecimal
    const encryptedHex = encryptedDecimal.toString(8).toUpperCase();

    return encryptedHex;
};
