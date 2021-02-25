import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../core/services/data.service';
import {take} from 'rxjs/operators';
import {BasicResponse} from '../../../core/models/data.models';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.dataService.getAllCategoriesWithDetails().pipe(take(1)).subscribe(
        (resp: any) => {
          console.log('categ.with details', resp.data);
        }
    );

    this.dataService.getAllCategories().pipe(take(1)).subscribe(
        (resp: BasicResponse) => {
          console.log('categ.', resp.data);
        }
    );
  }

}
