var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
  //put all DOM shit into render?
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
