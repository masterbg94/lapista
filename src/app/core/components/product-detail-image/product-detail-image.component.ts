import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-detail-image.component.html',
  styleUrls: ['product-detail-image.component.scss']
})
export class ProductDetailImageComponent implements OnInit{
  @Input() detailImage;

  ngOnInit(): void {
    // console.log('data', this.detailImage);
  }
}
