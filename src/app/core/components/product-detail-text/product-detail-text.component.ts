import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-product-text',
  templateUrl: 'product-detail-text.component.html',
  styleUrls: ['product-detail-text.component.scss']
})
export class ProductDetailTextComponent implements OnInit {
  @Input() detailText;
  public selectedColor;
  public selectedSize;
  public allData;
  public itemForSizeId;

  constructor(private dataService: DataService) {
  }

  emitChangedColor(x) {
    this.dataService.emitNewColorImage.emit(x.image);
    this.selectedColor = x;
  }

  selectSize(x) {
    this.selectedSize = x;
  }

  ngOnInit(): void {
    this.selectedColor = this.detailText.colors[0];
  }

  updateCart() {
    // this.itemForSizeId = this.detailText.colors.filter(
    //   x => x.id === 2
    // );

   const dataForCart = {
      name: this.detailText.name,
      price: this.detailText.price,
      image: this.detailText.image,
      color: this.selectedColor.name,
      size: this.selectedSize.sizeName
    };

    let a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('cart')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(dataForCart);
    // Alert the array value

    localStorage.setItem('cart', JSON.stringify(a));

    console.log(JSON.parse(localStorage.getItem('cart')).length);

    // :TODO : Napraviti da se nakon uslova kupovine (porucivanja) izvrsi sledeci kod ispod
    //
    /*
    let testIds = [10, 11];
    for (let t of testIds) {
      this.dataService.decrementSize(t).subscribe(
        (res: any) => {
          console.log(res);
        }
      );
    }
    */
  }

}
