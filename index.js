// Write your solution in this file!
// function updateDriverWithKeyAndValue(driver, key, value) {
//   const newDriver = {...driver};
//   newDriver[key] = value;
//   return newDriver;
// }

const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const copyObj = Object.assign({}, driver);
  delete copyObj[key];

  return copyObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}
