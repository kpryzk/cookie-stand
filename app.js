'use strict';

//connects to empty table on HTML page
var theTable = document.getElementById('salmoncookies');

//array of hours that stores are open
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//formstuff
var cookieForm = document.getElementById('cookie-form');
// var clearCookieForm = document.getElementsById('clear-cookie-form');

var allstores = [];

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
  allstores.push(this);
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

Store.prototype.render = function() {
  this.calcCookiesPerHour();
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
  makeFooter();
};

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
  // cookieForm.innerHTML = '';
  for (var i = 0; i < allstores.length; i++) {
    // allstores[i].calcCookiesPerHour();
    allstores[i].render();
  }
}

function makeFooter() {
  removeFooter();
  var tfEl = document.createElement('tfoot');
  tfEl.id = 'totalfooter';
  theTable.appendChild(tfEl);
  // var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'All Stores';
  tfEl.appendChild(thEl);
  var hourlySalesAllTotal = 0;
  var hourlySalesAll = 0;
  for (var i = 0; i < hours.length; i++){
    hourlySalesAll = 0;
    for (var j = 0; j < allstores.length; j++){
      hourlySalesAll += allstores[j].cookiesEachHour[i];
      hourlySalesAllTotal += allstores[j].cookiesEachHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = hourlySalesAll;
    tfEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = hourlySalesAllTotal;
  tfEl.appendChild(thEl);
  theTable.appendChild(tfEl);
}

function removeFooter(){
  var footerRef = document.getElementById('totalfooter');
  if (footerRef !== null) {
    footerRef.parentElement.removeChild(footerRef);
  }
}

function formSubmission(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var minCustomer = parseInt(event.target.min.value);
  var maxCustomer = parseInt(event.target.max.value);
  var avgCookies = parseInt(event.target.avg.value);
  var newStore = new Store (name, minCustomer, maxCustomer, avgCookies);
  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
  newStore.render();
}

//empty array to be populated by Store object constructor
new Store('Pike Place Market', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 24, 1.2);

makeHeader();
renderAllStores();

cookieForm.addEventListener('submit', formSubmission);
// clearCookieForm.addEventListener('click', function() {
//   cookieForm.innerHTML = '';
//   allstores = [];
// });
