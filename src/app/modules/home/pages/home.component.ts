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
