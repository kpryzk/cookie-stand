var hours = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

//Pike Place Market Literal Object
var pikePlaceMkt = {
  locationName: 'Pike Place Market',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  totalDailySales: 0,
  calcCustomersThisHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    };
  },
  cookiesEachHour: [],
  calcCookiesPerHour:  function() {
    for (var j = 0; j < this.customersEachHour.length; j++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesEachHour[j];
    }
  },
  render: function(){
    var pikeh2 = document.getElementById('piketitle');
    pikeh2.textContent = this.locationName;
    var pike = document.getElementById('pikesales');
    for (var i = 0; i < hours.length; i++) {
      var pikeLiEl = document.createElement('li');
      pikeLiEl.textContent = hours[i] + ' ......  ' + this.cookiesEachHour[i] + ' cookies';
      pike.appendChild(pikeLiEl);
    }
    var piketotal = document.getElementById('piketotal');
    piketotal.textContent = 'Total Daily Sales: ' + this.totalDailySales;
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
  totalDailySales: 0,
  calcCustomersThisHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    };
  },
  cookiesEachHour: [],
  calcCookiesPerHour:  function() {
    for (var j = 0; j < this.customersEachHour.length; j++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesEachHour[j];
    }
  },
  render: function(){
    var seatach2 = document.getElementById('seatactitle');
    seatach2.textContent = this.locationName;
    var seatac = document.getElementById('seatacsales');
    for (var i = 0; i < hours.length; i++) {
      var seatacLiEl = document.createElement('li');
      seatacLiEl.textContent = hours[i] + ' ......  ' + this.cookiesEachHour[i] + ' cookies';
      seatac.appendChild(seatacLiEl);
    }
    var seatactotal = document.getElementById('seatactotal');
    seatactotal.textContent = 'Total Daily Sales: ' + this.totalDailySales;
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
  totalDailySales: 0,
  calcCustomersThisHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    };
  },
  cookiesEachHour: [],
  calcCookiesPerHour:  function() {
    for (var j = 0; j < this.customersEachHour.length; j++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesEachHour[j];
    }
  },
  render: function(){
    var centerh2 = document.getElementById('centertitle');
    centerh2.textContent = this.locationName;
    var center = document.getElementById('centersales');
    for (var i = 0; i < hours.length; i++) {
      var centerLiEl = document.createElement('li');
      centerLiEl.textContent = hours[i] + ' ......  ' + this.cookiesEachHour[i] + ' cookies';
      center.appendChild(centerLiEl);
    }
    var centertotal = document.getElementById('centertotal');
    centertotal.textContent = 'Total Daily Sales: ' + this.totalDailySales;
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
  totalDailySales: 0,
  calcCustomersThisHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    };
  },
  cookiesEachHour: [],
  calcCookiesPerHour:  function() {
    for (var j = 0; j < this.customersEachHour.length; j++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesEachHour[j];
    }
  },
  render: function(){
    var capitolh2 = document.getElementById('capitoltitle');
    capitolh2.textContent = this.locationName;
    var capitol = document.getElementById('capitolsales');
    for (var i = 0; i < hours.length; i++) {
      var capitolLiEl = document.createElement('li');
      capitolLiEl.textContent = hours[i] + ' ......  ' + this.cookiesEachHour[i] + ' cookies';
      capitol.appendChild(capitolLiEl);
    }
    var capitoltotal = document.getElementById('capitoltotal');
    capitoltotal.textContent = 'Total Daily Sales: ' + this.totalDailySales;
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
  totalDailySales: 0,
  calcCustomersThisHour: function(){
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
    };
  },
  cookiesEachHour: [],
  calcCookiesPerHour:  function() {
    for (var j = 0; j < this.customersEachHour.length; j++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[j] * this.avgCookiesPerCustomer));
      this.totalDailySales += this.cookiesEachHour[j];
    }
  },
  render: function(){
    var alkih2 = document.getElementById('alkititle');
    alkih2.textContent = this.locationName;
    var alki = document.getElementById('alkisales');
    for (var i = 0; i < hours.length; i++) {
      var alkiLiEl = document.createElement('li');
      alkiLiEl.textContent = hours[i] + ' ......  ' + this.cookiesEachHour[i] + ' cookies';
      alki.appendChild(alkiLiEl);
    }
    var alkitotal = document.getElementById('alkitotal');
    alkitotal.textContent = 'Total Daily Sales: ' + this.totalDailySales;
  }
};
alki.calcCustomersThisHour();
alki.calcCookiesPerHour();
alki.render();
