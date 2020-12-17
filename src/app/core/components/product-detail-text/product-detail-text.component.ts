import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-product-text',
  templateUrl: 'product-detail-text.component.html',
  styleUrls: ['product-detail-text.component.scss']
})
export class ProductDetailTextComponent implements OnInit {
  @Input() detailText;

  constructor(private dataService: DataService) {
  }

  emitChangedColor(x) {
    this.dataService.emitNewColorImage.emit(x.image);
  }

  ngOnInit(): void {
    console.log('detailText', this.detailText);
  }
}
