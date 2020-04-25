import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "./data-service.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  foodList : any;
  cartList = [];
  cartData = {};
  totalAmout = 0;
  
  constructor(private dataServiceService: DataServiceService) { }
  ngOnInit(){
    this.foodList  = this.dataServiceService.foodInformation();
  }
  
  addToCart(foodItem){
    console.log(foodItem)
    this.totalAmout = this.totalAmout + foodItem.price;
    if(this.cartData[foodItem.type]){
      this.cartData[foodItem.type].price = this.cartData[foodItem.type].price + foodItem.price;
    }else{
      this.cartData[foodItem.type] = {"price" : foodItem.price};
    }
    console.log('Cart Data ',Object.keys(this.cartData));
    this.createCartList(this.cartData);
    //this.cartList.push(foodItem);
  }
  createCartList(cartData){
    let data = Object.keys(cartData);
    this.cartList = [];
    for(let i = 0 ; i<data.length; i++){
      this.cartList.push({type : data[i], totalPrice : cartData[data[i]].price})
    }    
  }
}
