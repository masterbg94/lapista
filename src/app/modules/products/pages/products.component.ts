import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../core/services/product.service';
import {FootwearModel} from '../../../core/models/footwear-model';
import {DataService} from '../../../core/services/data.service';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  allProducts: FootwearModel[];
  allShoes;

  constructor(private productService: ProductService, private dataService: DataService) {
  }

  ngOnInit(): void {
    // this.productService.getAllProducts().subscribe(
    //   (resp: any) => {
    //     this.allProducts = resp;
    //     console.log('all Proudcts:', this.allProducts);
    //   }
    // );
    this.dataService.getAllItems().subscribe(
      (res: any) => {
        this.allShoes = res.data;
        console.log('getAllItems()', this.allShoes);
      }, (error: any) => {
        alert('error');
      }
    );
  }
}
