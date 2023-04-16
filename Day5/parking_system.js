let level = 1;
let rows = 5;
let columns = 5;

//c - car , m - motorcycle, b - bus

let parkingArr = new Array(rows);

const initialize = () => {
  for (let i = 0; i < rows; i++) {
    parkingArr[i] = new Array(columns);
    for (let j = 0; j < columns; j++) {
      parkingArr[i][j] = '0';
    }
  }
  console.log(parkingArr);
};

const parkCar = () => {
  let parkingFound = false;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (parkingArr[i][j] === '0') {
        parkingArr[i][j] = 'c';
        parkingFound = true;
        break;
      }
    }
    if (parkingFound) break;
  }
};

const parkMotorcycle = () => {
  let parkingFound = false;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (parkingArr[i][j] === '0') {
        parkingArr[i][j] = 'm';
        parkingFound = true;
        break;
      }
    }
    if (parkingFound) break;
  }
};

const parkBus = () => {
  let parkingFound = false;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= columns - 4; j++) {
      if (
        parkingArr[i][j] === '0' &&
        parkingArr[i][j + 1] === '0' &&
        parkingArr[i][j + 2] === '0' &&
        parkingArr[i][j + 3] === '0'
      ) {
        parkingArr[i][j] = 'b';
        parkingArr[i][j + 1] = 'b';
        parkingArr[i][j + 2] = 'b';
        parkingArr[i][j + 3] = 'b';
        parkingFound = true;
        break;
      }
    }
    if (parkingFound) break;
  }
};

initialize();
parkCar();
console.log('Parking Arr after First Car: ', parkingArr);
parkMotorcycle();
console.log('Parking Arr after First Motorcycle: ', parkingArr);
parkBus();
console.log('Parking Arr after First Bus: ', parkingArr);
