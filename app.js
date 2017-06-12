var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Pike Place Market Literal Object
var pikePlaceMkt = {
  locationName: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  calcCustomersThisHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    };
  },
  cookiesEachHour: [],
  calcCookiesPerHour:  function() {
    for (var j = 0; j < this.customersEachHour.length; j++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[j] * 6.3));
    }
  },
  render: function(){
    var pike = document.getElementById('pikesales');
    for (var i = 0; i < hours.length; i++) {
      var pikeLiEl = document.createElement('li');
      pikeLiEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      pike.appendChild(pikeLiEl);
    }
  }
};
pikePlaceMkt.calcCustomersThisHour();
pikePlaceMkt.calcCookiesPerHour();
pikePlaceMkt.render();

//SeaTac Airport Literal Object
var seaTacAirport = {
  locationName: 'SeaTac Airport',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  customersEachHour: [],
  calcCustomersThisHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    };
  },
  cookiesEachHour: [],
  calcCookiesPerHour:  function() {
    for (var j = 0; j < this.customersEachHour.length; j++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[j] * 6.3));
    }
  },
  render: function(){
    var seatac = document.getElementById('seatacsales');
    for (var i = 0; i < hours.length; i++) {
      var seatacLiEl = document.createElement('li');
      seatacLiEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      seatac.appendChild(seatacLiEl);
    }
  }
};
seaTacAirport.calcCustomersThisHour();
seaTacAirport.calcCookiesPerHour();
seaTacAirport.render();

//Seattle Center Literal Object
var seattleCenter = {
  locationName: 'Seattle Center',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  customersEachHour: [],
  calcCustomersThisHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    };
  },
  cookiesEachHour: [],
  calcCookiesPerHour:  function() {
    for (var j = 0; j < this.customersEachHour.length; j++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[j] * 6.3));
    }
  },
  render: function(){
    var center = document.getElementById('centersales');
    for (var i = 0; i < hours.length; i++) {
      var centerLiEl = document.createElement('li');
      centerLiEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      center.appendChild(centerLiEl);
    }
  }
};
seattleCenter.calcCustomersThisHour();
seattleCenter.calcCookiesPerHour();
seattleCenter.render();

//Capitol Hill Literal Object
var capitolHill = {
  locationName: 'Capitol Hill',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  customersEachHour: [],
  calcCustomersThisHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    };
  },
  cookiesEachHour: [],
  calcCookiesPerHour:  function() {
    for (var j = 0; j < this.customersEachHour.length; j++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[j] * 6.3));
    }
  },
  render: function(){
    var capitol = document.getElementById('capitolsales');
    for (var i = 0; i < hours.length; i++) {
      var capitolLiEl = document.createElement('li');
      capitolLiEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      capitol.appendChild(capitolLiEl);
    }
  }
};
capitolHill.calcCustomersThisHour();
capitolHill.calcCookiesPerHour();
capitolHill.render();

//Alki Literal Object
var alki = {
  locationName: 'Alki',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  customersEachHour: [],
  calcCustomersThisHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    };
  },
  cookiesEachHour: [],
  calcCookiesPerHour:  function() {
    for (var j = 0; j < this.customersEachHour.length; j++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[j] * 6.3));
    }
  },
  render: function(){
    var alki = document.getElementById('alkisales');
    for (var i = 0; i < hours.length; i++) {
      var alkiLiEl = document.createElement('li');
      alkiLiEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      alki.appendChild(alkiLiEl);
    }
  }
};
alki.calcCustomersThisHour();
alki.calcCookiesPerHour();
alki.render();
