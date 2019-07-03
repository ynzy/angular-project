import { Component, OnInit } from '@angular/core';
import { LocationService } from "../../services/location/location.service";
@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  items;

  constructor(private location:LocationService) {
    this.items = this.location.getItems()
    // .filter(data => {
    //   // console.log(data)
    //   return !data.hasDone && data
    // })
    // console.log(this.items)
   }

  ngOnInit() {
  }

}
