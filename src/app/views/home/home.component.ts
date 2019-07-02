import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var BMap: any;
declare var BMapLib: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hasDoneList: any[] = [
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
      hasDone: true,
      date: '2018-12-29',
      location: {
        lat: 30.598467,
        lng: 114.311586
      }
    },
    {
      name: '武汉',
      desc: '武汉好，去了还想去，不错！',
      price: '2000',
      hasDone: true,
      date: '2018-12-29',
      location: {
        lat: 30.598467,
        lng: 114.311586
      }
    },
    {
      name: '武汉',
      desc: '武汉好，去了还想去，不错！',
      price: '2000',
      hasDone: true,
      date: '2018-12-29',
      location: {
        lat: 30.598467,
        lng: 114.311586
      }
    }
  ];
  validateForm: FormGroup;


  constructor(private fb: FormBuilder) {

  }


  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
    this.validateForm.reset();
    console.log(this.validateForm.value);
  }
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      date: [null, [Validators.required]],
    });
    // 百度地图API功能
    var map = new BMap.Map("baidu-map");          // 创建地图实例  
    map.centerAndZoom(new BMap.Point(118.454, 32.955), 6);  // 创建点坐标  
    map.enableScrollWheelZoom();
    var beijingPosition = new BMap.Point(116.432045, 39.910683),
      hangzhouPosition = new BMap.Point(120.129721, 30.314429),
      taiwanPosition = new BMap.Point(121.491121, 25.127053);
    var points = [beijingPosition, hangzhouPosition, taiwanPosition];

    var curve = new BMapLib.CurveLine(points, { strokeColor: "blue", strokeWeight: 3, strokeOpacity: 0.5 }); //创建弧线对象
    map.addOverlay(curve); //添加到地图中
    curve.enableEditing(); //开启编辑功能
  }


}
