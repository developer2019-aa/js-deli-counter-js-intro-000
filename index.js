function takeANumber(currentLine, newName) {
  return `Welcome, ${newName}. You are number ${currentLine.length + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length <= 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return katzDeliLine.shift();
  }
}

function currentLine(array) {
  if (array.length === 0) return 'The line is currently empty.';
  let currentLine = 'The line is currently: ';

  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
        currentLine += `${i+1}. ${array[i]}`;
    } else {
        currentLine += `${i+1}. ${array[i]}, `;
    }
  }
  return currentLine;
}
