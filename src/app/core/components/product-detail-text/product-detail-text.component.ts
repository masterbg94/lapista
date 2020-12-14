import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-text',
  templateUrl: 'product-detail-text.component.html',
  styleUrls: ['product-detail-text.component.scss']
}) export class ProductDetailTextComponent implements OnInit{
  @Input() detailText;

  ngOnInit(): void {
    // console.log('data', this.detailText);
  }
}
