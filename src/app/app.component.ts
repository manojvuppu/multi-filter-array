import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {
    const initialData = [
      {
        accessories: true,
        beauty: false,
        home: false,
        jewelry: false,
        kids: false,
        men: false,
        women: true,
        unisex: false,
        nearestLocation: 'new-york',
        oneDollar: true,
        twoDollar: true,
        threeDollar: false,
        fourDollar: false,
        store_id: 29,
        storeName: 'test 1',
      },
      {
        accessories: false,
        beauty: true,
        home: true,
        jewelry: false,
        kids: false,
        men: false,
        women: true,
        unisex: false,
        nearestLocation: 'los-angeles',
        oneDollar: true,
        twoDollar: true,
        threeDollar: false,
        fourDollar: false,
        store_id: 30,
        storeName: 'test 2',
      },
      {
        accessories: false,
        beauty: true,
        home: true,
        jewelry: false,
        kids: false,
        men: false,
        women: true,
        unisex: false,
        nearestLocation: 'reston',
        oneDollar: true,
        twoDollar: true,
        threeDollar: false,
        fourDollar: false,
        store_id: 30,
        storeName: 'test 2',
      },
    ];

    // use as key a property name in the objects inside `initialData`
    var filters = {
      beauty: [true],
      home: [true],
      women: [true],
      oneDollar: [true],
      twoDollar: [true],
      nearestLocation: ['los-angeles'],
    };

    const filteredItems = filterPlainArray(initialData, filters);

    console.log(filteredItems);
  }
}

const getValue = (value) =>
  typeof value === 'string' ? value.toUpperCase() : value;

function filterPlainArray(array, filters) {
  const filterKeys = Object.keys(filters);
  return array.filter((item) => {
    // validates all filter criteria
    return filterKeys.every((key) => {
      // ignores an empty filter
      if (!filters[key].length) return true;
      return filters[key].find(
        (filter) => getValue(filter) === getValue(item[key])
      );
    });
  });
}
