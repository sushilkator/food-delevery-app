import { Injectable } from '@angular/core';
const FOOD_DATA = [{
  "name" : "Pizza 1",
  "price" : 150,
  "rating" : 4,
  "category" : "veg",
  "img": "/assets/p1.jpg",
  "type" : 'pizza'
},
{
  "name" : "Pizza 2",
  "price" : 120,
  "rating" : 5,
  "category" : "veg",
  "img": "/assets/p2.jfif",
  "type" : 'pizza'
},
{
  "name" : "Pizza 3",
  "price" : 200,
  "rating" : 2,
  "category" : "NonVeg",
  "img": "/assets/p2.jfif",
  "type" : 'pizza'
},
{
  "name" : "Burger 1",
  "price" : 120,
  "rating" : 5,
  "category" : "veg",
  "img": "/assets/b1.jpg",
  "type" : 'burger'
},
{
  "name" : "Burger 2",
  "price" : 120,
  "rating" : 5,
  "category" : "veg",
  "img": "/assets/b2.jpg",
  "type" : 'burger'
},
{
  "name" : "Burger 3",
  "price" : 200,
  "rating" : 2,
  "category" : "NonVeg",
  "img": "/assets/b3.jpg",
  "type" : 'burger'
},
{
  "name" : "Burger 4",
  "price" : 190,
  "rating" : 3,
  "category" : "NonVeg",
  "img": "/assets/b4.jfif",
  "type" : 'burger'
}]
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  foodInformation(){
    return FOOD_DATA;
  }
}
