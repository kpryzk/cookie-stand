function makeElement(type, content, parent){
  //create
  var newEl = document.createElement(type);
  //content
  newEl.textContent = content;
  //apend
  parent.appendChild(newEl);
}

Store.protype.render = function() {
  var trEl = document.createElement('tr');
  makeElement('td', this.storeLocation, trEl);
  for (var i = 0; i < hours.length; i++) {
    makeElement('td', this.cookiesEachHour[i], trEl);
  }
  makeElement('th', this.totalDailySales, trEl);
};
