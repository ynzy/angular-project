import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-map',
  templateUrl: './new-map.component.html',
  styleUrls: ['./new-map.component.scss']
})
export class NewMapComponent implements OnInit {
  list:any[] = [
    {
      name: '北京',
      desc: '北京好，风景真的不错！',
      price: '2000',
      date: '2018-12-29',
      hasDone: true,
      location: {
        lat: 39.910924,
        lng: 116.413387
      }
    },
    {
      name: '苏州',
      desc: '苏州好，去了还想去，不错！',
      price: '2000',
      hasDone: true,
      date: '2018-12-29',
      location: {
        lat: 31.303565,
        lng: 120.592412
      }
    },{
      name: '北京',
      desc: '北京好，风景真的不错！',
      price: '2000',
      date: '2018-12-29',
      hasDone: true,
      location: {
        lat: 39.910924,
        lng: 116.413387
      }
    },
    {
      name: '苏州',
      desc: '苏州好，去了还想去，不错！',
      price: '2000',
      hasDone: true,
      date: '2018-12-29',
      location: {
        lat: 31.303565,
        lng: 120.592412
      }
    },{
      name: '北京',
      desc: '北京好，风景真的不错！',
      price: '2000',
      date: '2018-12-29',
      hasDone: false,
      location: {
        lat: 39.910924,
        lng: 116.413387
      }
    },
    {
      name: '苏州',
      desc: '苏州好，去了还想去，不错！',
      price: '2000',
      hasDone: false,
      date: '2018-12-29',
      location: {
        lat: 31.303565,
        lng: 120.592412
      }
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
