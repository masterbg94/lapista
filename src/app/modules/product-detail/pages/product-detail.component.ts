import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../core/services/data.service';
import {BasicResponse} from '../../../core/models/data.models';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  data;
  singleDataObject;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((r) => {
      const parId: number = +r.id;
      this.returnDataById(parId);
    });
  }

  returnDataById(id) {
    this.dataService.getItemById(id).subscribe(
      (resp: any) => {
        this.singleDataObject = resp.data;
        console.log('singleDataObject', this.singleDataObject);
      } , (error: any) => {
        console.log('error:', error);
        alert('error=>read console');
      }
    );
  }
}
