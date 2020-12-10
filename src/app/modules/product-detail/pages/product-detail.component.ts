import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../core/services/data.service';
import {BasicResponse} from '../../../core/models/data.models';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  data;
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getAllItems().subscribe(
      (resp: BasicResponse) => {
        console.log(resp.data);
        this.data = resp.data;
      }, (error: any) => {
        alert(error);
      }
    );
  }
}
