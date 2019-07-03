import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService } from "../../services/location/location.service";
import { RequestService } from "../../services/request/request.service";
import { HttpClient } from "@angular/common/http";
declare var BMap: any;
declare var BMapLib: any;

//全局定义callback函数，获取请求数据
let locationData = null;
window['cb'] = function(data) {
  locationData = data && data.results;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hasDoneList;
  validateForm: FormGroup;


  constructor(private fb: FormBuilder,
    private location:LocationService,
    private request:RequestService,
    private http:HttpClient
    ) {
      this.hasDoneList = this.location.getItems().filter(item => {
        console.log(item)
        return item.hasDone && item
      });
      this.validateForm = this.fb.group({
        name: [null, [Validators.required]],
        price: [null, [Validators.required]],
        date: [null, [Validators.required]],
      });
  }

  ngOnInit() {
    
    // 百度地图API功能
    var map = new BMap.Map("baidu-map");          // 创建地图实例  
    map.centerAndZoom(new BMap.Point(118.454, 32.955), 6);  // 创建点坐标  
    map.enableScrollWheelZoom();
    let points = [];

    this.location.getItems().forEach(item => 
      // && 只要&&前面为true，无论&&后面是true还是false，结果都返回&&后面的值
      item.hasDone &&  points.push(new BMap.Point(item.location.lng,item.location.lat))
    )

    var curve = new BMapLib.CurveLine(points, { strokeColor: "blue", strokeWeight: 3, strokeOpacity: 0.5 }); //创建弧线对象
    map.addOverlay(curve); //添加到地图中
    curve.enableEditing(); //开启编辑功能
  }

  async searchLocation(v) {
    return await this.request.getCors('/place/v2/search',
    {region: v, query: v, callback: 'cb'});
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    // console.log(this.validateForm.value);
    let currentData = this.validateForm.value; //重新赋值
    let date = new Date(currentData.date);
    currentData.date = date.getTime();
    // console.log(this.validateForm.value);
    this.searchLocation(currentData.name).then(res => {
      // console.log(locationData[0].location)
      this.location.addToList({
        ...currentData,
        location: locationData[0].location,
        desc: '计划中...',
        hasDone: false
      })
    });

    this.validateForm.reset();
  }
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

}
