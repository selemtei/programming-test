const fs = require('fs');

function sumIntegersFromFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    const lines = data.trim().split('\n');
    let sum = 0;

    lines.forEach(line => {
      const number = parseInt(line);
      if (!isNaN(number)) {
        sum += number;
      }
    });

    return sum;
    
  }catch (err) {
    console.error('Error reading file:', err);
    return null;
  }
}

// Unit test cases
const filename = 'integers.txt';
console.log(sumIntegersFromFile(filename));