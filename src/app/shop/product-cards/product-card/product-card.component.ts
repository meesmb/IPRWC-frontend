import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../ProductModel";
import {ShoppingCartService} from "../../../../services/shopping-cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product : ProductModel;

  constructor(private shoppingCartService : ShoppingCartService) {
    this.product = new ProductModel();
  }

  ngOnInit(): void {
  }

  buyButtonClicked() {
    this.shoppingCartService.addToCartAndLogin(this.product);
  }

  getFullProductSpecs() : string {
    let specs = "";
    for (let i = 0; i < this.product.filterTags.length; i++) {
      specs +=  this.product.filterTags[i].name + ", ";
    }
    return specs + this.product.specs;
  }

  getImagePath() : string {
    return this.shoppingCartService.getUrl() + "/product_image/get/" + this.product.image;
  }
}
