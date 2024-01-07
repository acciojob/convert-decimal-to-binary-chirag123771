function decimalToBinary(decimalNumber) {
  // your code here if (typeof decimalNumber !== 'number' || decimalNumber < 0 || decimalNumber > Math.pow(2, 31) - 1) {
        console.log("Please enter a valid positive integer within the specified range.");
        return;
    }

    // Special case for 0
    if (decimalNumber === 0) {
        return '0';
    }

    // Convert decimal to binary
    let binaryRepresentation = '';
    while (decimalNumber > 0) {
        binaryRepresentation = (decimalNumber % 2) + binaryRepresentation;
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    return binaryRepresentation;
}
const decimalNumber = parseInt(prompt("Enter a number."));
alert(decimalToBinary(decimalNumber));
