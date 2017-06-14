'use strict';

//connects to empty table on HTML page
var theTable = document.getElementById('salmoncookies');

//array of hours that stores are open
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//empty array to be populated by store object constructor
var stores = [];

//randomize function for # of customers per hour
function randomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//header function
function makeHeader() {
  //add blank space to accomodate store name
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);
  //add hours to table
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  //add column for total
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  //create header row
  theTable.appendChild(trEl);
}

//this function runs functions
function renderAllStores() {
  for (var i = 0; i < stores.length; i++) {
    stores[i].calcCookiesPerHour();
    stores[i].render();
  }
}

function hourlySalesAllAt(hour) {
  var total = 0;
  for (var i = 0; i < stores.length; i++) {
    var store = stores[i];
    total += store.cookiesEachHour[hour];
  }
  return total;
}

function hourlySalesAll() {
  var total = 0;
  for (var i = 0; i < stores.length; i++) {
    var store = stores[i];
    total += store.totalDailySales;
  }
  return total;
}

function makeFooter() {
  var tfEl = document.createElement('tfoot');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'All Stores';
  trEl.appendChild(tdEl);
  tfEl.appendChild(trEl);
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = hourlySalesAllAt(i);
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = hourlySalesAll();
  trEl.appendChild(tdEl);
  theTable.appendChild(tfEl);
}

//an object constructor to make each store
function Store(name, minCustomer, maxCustomer, avgCookies){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.totalDailySales = 0;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.hourlySales = 0;
  stores.push(this);
}

//use randomizing function to create a number of customers each hour
Store.prototype.calcCustomersThisHour = function() {
  var reference = [];
  for (var i = 0; i < hours.length; i++){
    reference.push(randomCustomer(this.minCustomer, this.maxCustomer));
    this.customersEachHour = reference;
  }
};

//estimate how many cookies sold based on randomized customers and average cookies sold
Store.prototype.calcCookiesPerHour = function() {
  this.calcCustomersThisHour();
  var reference = [];
  for (var i = 0; i < hours.length; i++) {
    reference.push(Math.ceil(this.customersEachHour[i] * this.avgCookies));
    this.cookiesEachHour = reference;
    this.totalDailySales += this.cookiesEachHour[i];
  }
};

// Store.prototype.hourTotals = function () {
//   var reference = [];
//   for (var i = 0; i < hours.length; i++) {
//     for (var j = 0; j < stores.length; j++) {
//       reference.push(this.hourlySales += this.cookiesEachHour[j]);
//       this.hourlySalesAll = reference;
//     }
//   }
//   return reference;
// };

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
makeFooter();
