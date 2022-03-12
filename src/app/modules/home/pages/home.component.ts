import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../core/services/data.service';
import {take} from 'rxjs/operators';
import {BasicResponse} from '../../../core/models/data.models';
import {HttpClient} from '@angular/common/http';
import {pipe} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    randomItems: any[] = [];
    slideImages = [
        'lapista-slide-1.jpg',
        'lapista-slide-2.jpg',
        'lapista-slide-3.jpg',
        'lapista-slide-4.jpg',
        'lapista-slide-5.jpg',
        'lapista-slide-6.jpg',
        'lapista-slide-7.jpg',
        'lapista-slide-8.jpg',
        'lapista-slide-9.jpg',
    ];

    constructor(private dataService: DataService, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.dataService.getAllItems().pipe(take(1)).subscribe(
            (response: any) => {
                let testData = response.data.filter((x) => x.category.name == 'pumps');
                console.log('pumps', testData);
                for (var _i = 0; _i < 7; _i++) {
                    this.randomItems.push(testData[_i]);
                }
                console.log('random', this.randomItems);
            }
        );
    }

}
