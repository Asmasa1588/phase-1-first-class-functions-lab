// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  const [firstDriver, secondDriver] = drivers;
  return [firstDriver, secondDriver];
}
function returnLastTwoDrivers(drivers) {
  //  return drivers.slice(drivers.length - 2);
  const driversLength = drivers.length;
  return [drivers[driversLength - 2], drivers[driversLength - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return (num) => {
    return multiplier * num;
  };
}
function fareDoubler(num) {
  return num * 2;
}
function fareTripler(num) {
  return num * 3;
}
function selectDifferentDrivers(arrayOfDrivers, fn) {
  return fn(arrayOfDrivers);
}
