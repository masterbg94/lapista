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
    bgImageText: { bgImage: string, bgText: string } = {bgImage: '', bgText: ''};

    constructor(
        private productService: ProductService,
        private dataService: DataService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((r) => {
            this.parametar = r.category;
            if (this.parametar !== 'la-pista' && this.parametar !== 'identita') {
                switch (this.parametar) {
                    case 'sandals': {
                        this.bgImageText.bgImage = '/assets/img/lapista-new-1.jpg';
                        this.bgImageText.bgText = this.parametar;
                        break;
                    }
                    case 'pumps': {
                        this.bgImageText.bgImage = '/assets/img/lapista-new-2.jpg';
                        this.bgImageText.bgText = this.parametar;
                        break;
                    }
                    case 'boots': {
                        this.bgImageText.bgImage = '/assets/img/lapista-new-1.jpg';
                        this.bgImageText.bgText = this.parametar;
                        break;
                    }
                }
            }

            console.log('r', r);
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
                } else if (this.parametar === 'identita') {
                    // this.getProducts(this.parametar);
                    this.getAllShoesOnly();
                } else if (this.parametar === 'la-pista') {
                    // this.getProducts(this.parametar);
                    this.getNewShoes();
                } else {
                    this.getAllProductColor(this.parametar);
                }
            }
            // For /products without parametar // samo kroz / products
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
                    (x) => ((x.item.category.name.toLowerCase() !== 'bags') && (x.item?.isnew == 0))
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

    // TODO: Treba izmeniti i proveriti backend za ovo, da vraca sa backa ove podatke umesto filtera ovde
    getNewShoes() {
        this.dataService.getAllColors().subscribe(
            (res: any) => {
                this.allShoes = res.data.filter(x => x.item.isnew === 1);
                // console.log('samo nove cipe', this.allShoes);
            }, (error: any) => {
                console.log('error', error);
            }
        );
    }
}
