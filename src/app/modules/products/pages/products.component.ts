import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { FootwearModel } from '../../../core/models/footwear-model';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  allProducts: FootwearModel[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (resp: any) => {
        this.allProducts = resp;
        console.log('allP:', this.allProducts);
      }
    );
  }
}
