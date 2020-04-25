import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  @Input() foodInfo: any;
  constructor() { }

  ngOnInit() {
  }

}
