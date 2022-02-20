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

    constructor(private dataService: DataService, private routeSnap: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.getRouteId();
        this.getItemByColorId(this.colorIdParam);
    }

    getRouteId() {
        this.routeSnap.params.subscribe(
            (resp: any) => {
                this.colorIdParam = resp.colorid;
            }
        );
    }

    getItemByColorId(id) {
        this.dataService.getColorById(id).subscribe(
            (response: any) => {
                this.shoeByColor = response.data;
                // console.log('this.shoeByColor', this.shoeByColor);
            }, error => {
                console.log('Greska:', error);
            }
        );
    }
}
