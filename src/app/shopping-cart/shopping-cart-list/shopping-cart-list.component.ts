import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartModel} from "../shopping-cart.model";
import {ShoppingCartService} from "../../../services/shopping-cart.service";
import {OrderService} from "../../../services/order.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OrderPopupComponent} from "./order-popup/order-popup.component";

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit {
  @Input() shoppingCart : ShoppingCartModel = new ShoppingCartModel();

  constructor(private orderService : OrderService, private router : Router, private modalService : NgbModal) {
  }

  ngOnInit(): void {
  }

  getTotalPrice() : number {
    let price = 0;
    for (let i = 0; i < this.shoppingCart.products.length; i++) {
      price += (this.shoppingCart.products[i].product.price * this.shoppingCart.products[i].amount);
    }
    return price;
  }

  order() {
    let ref = this.modalService.open(OrderPopupComponent);
  }

  back() {
    this.router.navigate([".."]);
  }

  shouldDisableOrderButton() : boolean {
    return this.shoppingCart.products.length === 0;
  }
}
