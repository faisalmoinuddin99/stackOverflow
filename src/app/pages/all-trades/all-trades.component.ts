import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-all-trades',
  templateUrl: './all-trades.component.html',
  styleUrls: ['./all-trades.component.css'],
})
export class AllTradesComponent implements OnInit {
  // crops = [
  //   {
  //     name: 'Rice',
  //     checked: true,
  //   },
  //   {
  //     name: 'Wheat',
  //     checked: true,
  //   },
  //   {
  //     name: 'Barley',
  //     checked: true,
  //   },
  //   {
  //     name: 'Soyabean',
  //     checked: true,
  //   },
  // ];

  crops = [
    {
      name: 'Rice',
      checked: true,

      subCategory: [
        {
          id: 1,
          name: 'Basmati',
          isActive: true,
        },
        {
          id: 2,
          name: 'Ammamore',
          isActive: true,
        },
      ],
    },
    {
      name: 'Wheat',
      checked: true,
      subCategory: [
        {
          id: 1,
          name: 'Durum',
          isActive: true,
        },
        {
          id: 2,
          name: 'Emmer',
          isActive: true,
        },
      ],
    }, {
      name: 'Barley',
      checked: true,
      subCategory: [
        {
          id: 1,
          name: 'Hulless Barley',
          isActive: true,
        },
        {
          id: 2,
          name: 'Barley Flakes',
          isActive: true,
        },
      ],
    }
  ]
  service: any;



  onChange(event, index, item) {
    item.checked = !item.checked;
    console.log(index, event, item);
  }



  districts = [
    {
      name: 'Nashik',
      totalarea: '1000',
      areasown: '500',
      totalfarmers: 100,
      sowingfarmers: 50,
    },
    {
      name: 'Thane',
      totalarea: '110',
      areasown: '90',
      totalfarmers: 50,
      sowingfarmers: 20,
    },
    {
      name: 'Ratnagiri',
      totalarea: '105',
      areasown: '75',
      totalfarmers: 10,
      sowingfarmers: 5,
    },
    {
      name: 'Pune',
      totalarea: '20',
      areasown: '15',
      totalfarmers: 1,
      sowingfarmers: 1,
    },
  ];



  ngOnInit(): void { }

  //   onChange(event, crop) {

  //     //item.checked = !item.checked;

  //     //this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;

  //     console.log( event, crop);

  // }
}
