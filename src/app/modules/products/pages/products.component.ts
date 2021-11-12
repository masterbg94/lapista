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
    bgImageText: { bgImage: string, bgText: string } =  { bgImage: '', bgText: '' };

    constructor(
        private productService: ProductService,
        private dataService: DataService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((r) => {
            this.parametar = r.category;
            if (this.parametar) {
                if (this.parametar === 'all') {
                    this.bgImageText = null;
                    this.dataService.getAllColors().subscribe(
                        (res: any) => {
                            this.allShoes = res.data;
                            console.log('all', this.allShoes);
                        },
                        (error: any) => {
                            alert(
                                'Doslo je do greske , kontaktirajte nas ukoliko uskoro ne bude dostupno'
                            );
                        }
                    );
                } else if (this.parametar === 'shoes') {
                    // this.getProducts(this.parametar);
                    this.getAllShoesOnly();
                } else {
                    this.getAllProductColor(this.parametar);
                }
            }
            // For /products without parametar
            else {
                this.dataService.getAllItems().subscribe(
                    (res: any) => {
                        this.allShoes = res.data;
                    },
                    (error: any) => {
                        console.log('error', error);
                    }
                );
            }
        });
    }

    getProducts(filterParam) {
        this.dataService.getAllItems().subscribe(
            (res: any) => {
                this.allShoes = res.data.filter(
                    (x) => x.category.name.toLowerCase() === filterParam
                );
                console.log('getAllItems()', this.allShoes);
            },
            (error: any) => {
                alert('error');
            }
        );
    }

    getAllProductColor(param) {
        // Get all colors because need to show all shoes in every color
        console.log('param', param);

        switch (param) {
            case 'sandals': {
                this.bgImageText.bgImage = '/assets/img/lapista-new-1.jpg';
                this.bgImageText.bgText = param;
                break;
            }
            case 'pumps': {
                this.bgImageText.bgImage = '/assets/img/lapista-new-2.jpg';
                this.bgImageText.bgText = param;
                break;
            }
            case 'boots': {
                this.bgImageText.bgImage = '/assets/img/lapista-new-1.jpg';
                this.bgImageText.bgText = param;
                break;
            }
        }
        this.dataService.getAllColors().subscribe(
            (res: any) => {
                this.allShoes = res.data.filter(
                    (x) => x.item.category.name.toLowerCase() === param
                );
                console.log('all with param by cat.', this.allShoes);
            },
            (error: any) => {
                alert(
                    'doslo je do greske , ukoliko ne bude uskoro otklonjena obratite nam se'
                );
            }
        );
    }

    getAllShoesOnly() {
        this.dataService.getAllColors().subscribe(
            (res: any) => {
                this.allShoes = res.data.filter(
                    (x) => x.item.category.name.toLowerCase() !== 'bags'
                );
                console.log('all shoes.', this.allShoes);
            },
            (error: any) => {
                alert(
                    'doslo je do greske , ukoliko ne bude uskoro otklonjena obratite nam se'
                );
            }
        );
    }
}
