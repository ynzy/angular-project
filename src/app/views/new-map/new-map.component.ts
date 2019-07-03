import { Component, OnInit } from '@angular/core';
import { LocationService } from "../../services/location/location.service";
@Component({
  selector: 'app-new-map',
  templateUrl: './new-map.component.html',
  styleUrls: ['./new-map.component.scss']
})
export class NewMapComponent implements OnInit {
  list;
  
  constructor(private location:LocationService) { 
    this.list = location.getItems();
  }

  ngOnInit() {
  }

}
