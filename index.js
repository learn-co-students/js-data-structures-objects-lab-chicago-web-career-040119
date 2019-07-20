// Write your solution in this file!
const driver = {name: "Sam"};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({},driver, {address: '11 Broadway'})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
driver[key] = value;
return driver
}

function deleteFromDriverByKey(driver, name) {
const newDriver = Object.assign({}, driver);
delete newDriver.name;
return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, name) {
  delete driver.name;
  return driver;
}
