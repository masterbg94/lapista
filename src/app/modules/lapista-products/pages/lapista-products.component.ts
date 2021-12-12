import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../core/services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-lapista-products',
    templateUrl: './lapista-products.component.html',
    styleUrls: ['./lapista-products.component.scss']
})
export class LapistaProductsComponent implements OnInit {
    colorIdParam;
    shoeByColor;
    allLapistaShoes;

    constructor(private dataService: DataService, private routeSnap: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.allLapistaShoes = JSON.parse(localStorage.getItem('lapista-shoes'));
        console.log('allLapistaShoes', this.allLapistaShoes);
        this.getRouteId();
        this.getColorById(this.colorIdParam);
    }

    getRouteId() {
        this.routeSnap.params.subscribe(
            (resp: any) => {
                this.colorIdParam = resp.colorid;
                console.log('colorIdParam', this.colorIdParam);
            }
        );
    }

    /* Get single shoe with specific color id */
    /* USED LOCAL STORAGE because like this i can get all info about product */
    getColorById(id) {
        /*this.dataService.getColorById(id).subscribe(
            (response: any) => {
                this.shoeByColor = response.data;
                console.log('this.shoeByColor', this.shoeByColor);
            }, error => {
                console.log(error);
            }
        );*/
        this.shoeByColor = this.allLapistaShoes.find(x => x.id == id);
        console.log('shoe by color', this.shoeByColor);
    }
}
