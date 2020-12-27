import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  shoppingItems;

  ngOnInit(): void {
    this.getItemsFromLocalStorage();
  }

  getItemsFromLocalStorage() {
    this.shoppingItems = JSON.parse(localStorage.getItem('cart'));
    console.log('shoppingItems', this.shoppingItems);
  }

  deleteLocalStorage() {
    localStorage.removeItem('cart');
    // TODO: ispraviti bug kada se sve obrise ne menja se cart number()
    // this.getItemsFromLocalStorage();
    window.location.reload();
  }
}
