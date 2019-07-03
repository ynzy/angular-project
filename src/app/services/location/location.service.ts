import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../storage/storage.service";
/**
 * 访问列表，添加旅游清单，清除清单功能
 *
 * @export
 * @class LocationService
 */
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  items = [
    {
      name: '北京',
      desc: '北京好，风景真的不错！',
      price: '2000',
      date: 'Fri Jul 05 2019 09:35:37 GMT+0800 (中国标准时间)',
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
      date: '1562204417083',
      location: { 
        lat: 31.303565,
        lng: 120.592412
      }
    },
    {
      name: '上海',
      desc: '上海好，去了还想去，不错！',
      price: '2000',
      hasDone: true,
      date: '2018-12-29',
      location: { 
        lat: 31.235929, 
        lng: 121.48054 
      }
    },
    {
      name: '武汉',
      desc: '武汉好，去了还想去，不错！',
      price: '2000',
      hasDone: false,
      date: '2018-12-29',
      location: { 
        lat: 30.598467,
        lng: 114.311586
      }
    }
  ];
  constructor(private http:HttpClient,
    private storage:StorageService
    ) { 
      if(storage.get('list')) {
        this.items = storage.get('list')
      }
    }

    getItems() {
      return this.items;
    }

    addToList(data) {
      // console.log(data)
      this.items.push(data);
      console.log(this.items)
      this.storage.set('list',this.items)
    }

    clearList() {
      this.items = [];
      return this.items;
    }
}
