'use strict';

//connection to HTML table
var theTable = document.getElementById('salmoncookies');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var stores = [];

//randomize function
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeHeader() {
  //add blank space to accomodate store name
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  //add hours to table
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
}

function renderAllStores() {
  for (var i = 0; i < stores.length; i++) {
    stores[i].calcCookiesPerHour();
    stores[i].render();
  }
}

function Store(name, minCustomer, maxCustomer, avgCookies){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.totalDailySales = 0;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  stores.push(this);
}

Store.prototype.calcCustomersThisHour = function() {
  var reference = [];
  for (var i = 0; i < hours.length; i++){
    reference.push(randomCustomer(this.minCustomer, this.maxCustomer));
    this.customersEachHour = reference;
  }
};

Store.prototype.calcCookiesPerHour = function() {
  this.calcCustomersThisHour();
  var reference = [];
  for (var i = 0; i < hours.length; i++) {
    reference.push(Math.ceil(this.customersEachHour[i] * this.avgCookies));
    this.cookiesEachHour = reference;
    this.totalDailySales += this.cookiesEachHour[i];
  }
};

Store.prototype.render = function() {
  //add store name to table
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  //add hourly cookie sales to table
  for (var i = 0; i < hours.length; i ++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);
  theTable.appendChild(trEl);
};

new Store('Pike Place Market', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 24, 1.2);

makeHeader();
renderAllStores();
