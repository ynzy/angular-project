import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // 百度地图API功能
    // var map = new BMap.Map("container");          // 创建地图实例  
    // map.centerAndZoom(new BMap.Point(118.454, 32.955), 6);  // 创建点坐标  
    // map.enableScrollWheelZoom();
    // var beijingPosition = new BMap.Point(116.432045, 39.910683),
    //   hangzhouPosition = new BMap.Point(120.129721, 30.314429),
    //   taiwanPosition = new BMap.Point(121.491121, 25.127053);
    // var points = [beijingPosition, hangzhouPosition, taiwanPosition];

    // var curve = new BMapLib.CurveLine(points, { strokeColor: "blue", strokeWeight: 3, strokeOpacity: 0.5 }); //创建弧线对象
    // map.addOverlay(curve); //添加到地图中
    // curve.enableEditing(); //开启编辑功能
  }

}
