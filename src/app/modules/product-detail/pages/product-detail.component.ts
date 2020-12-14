import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../core/services/data.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  data;
  singleDataObject;
  detailImage;
  subscription: Subscription[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((r) => {
      const parId: number = +r.id;
      this.returnDataById(parId);
    });
    this.subscription.push(
      this.dataService.emitNewColorImage.subscribe((resp: any) => {
        if (resp) {
          console.log('new color image is:', resp);
          this.detailImage = resp;
        }
      })
    );
  }

  returnDataById(id) {
    this.dataService.getItemById(id).subscribe(
      (resp: any) => {
        this.singleDataObject = resp.data;
        this.detailImage = resp.data.image;
        console.log('singleDataObject', this.singleDataObject);
      },
      (error: any) => {
        console.log('error:', error);
        alert('error=>read console');
      }
    );
  }
}
