//your JS code here. If required.
function manipulateData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
    .then((numbers) => {
      const evenNumbers = numbers.filter((number) => number % 2 === 0);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      const multipliedNumbers = evenNumbers.map((number) => number * 2);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(multipliedNumbers);
        }, 2000);
      });
    })
    .then((multipliedNumbers) => {
      const outputElement = document.getElementById("output");
      outputElement.textContent = multipliedNumbers.join(", ");
    });
}

manipulateData();