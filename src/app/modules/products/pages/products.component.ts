import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../core/services/product.service';
import {FootwearModel} from '../../../core/models/footwear-model';
import {DataService} from '../../../core/services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  allProducts: FootwearModel[];
  allShoes;
  allProd;
  parametar = '';

  constructor(
    private productService: ProductService,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // this.productService.getAllProducts().subscribe(
    //   (resp: any) => {
    //     this.allProducts = resp;
    //     console.log('all Proudcts:', this.allProducts);
    //   }
    // );
    this.route.params.subscribe((r) => {
      this.parametar = r.category;
      if (this.parametar) {
        if (this.parametar === 'all'){
          this.dataService.getAllColors().subscribe(
            (res: any) => {
              this.allShoes = res.data;
              console.log('all' , this.allShoes);
            } , (error: any) => {
              alert('Doslo je do greske , kontaktirajte nas ukoliko uskoro ne bude dostupno');
          }
          )
        } else {
          this.getProducts(this.parametar);
        }
      } else {
        this.dataService.getAllItems().subscribe(
          (res: any) => {
            this.allShoes = res.data;
          }, (error: any) => {
            console.log('error', error);
          }
        );
      }
    });
  }

  getProducts(filterParam) {
    this.dataService.getAllItems().subscribe(
      (res: any) => {
        this.allShoes = res.data.filter(x => x.category.name.toLowerCase() === filterParam);
        console.log('getAllItems()', this.allShoes);
      }, (error: any) => {
        alert('error');
      }
    );
  }

}
