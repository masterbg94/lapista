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
  public selectedHeel;
  public allData;
  public itemForSizeId;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    console.log(this.detailText);
    this.selectedColor = this.detailText.colors[0];
  }

  emitChangedColor(x) {
    this.dataService.emitNewColorImage.emit(x.image);
    this.selectedColor = x;
    this.selectedSize = null;
    this.selectedHeel = null;
  }

  selectSize(x) {
    this.selectedSize = x;
    this.selectedHeel = null;
    console.log(x);
    this.returnHeelCount(x);
  }

  selectHeel(heel) {
    this.selectedHeel = heel;
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
      size: this.selectedSize.sizeName,
      heel: this.selectedHeel,
      description: this.detailText.description
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
    let ls = JSON.parse(localStorage.getItem('cart'));
    // console.log(ls);
    let mapirano = ls.map(x => x?.heel?.id);
    // console.log(mapirano);
    this.decrementHeels(mapirano);
  }

  decrementHeels(ids) {
    for (let i of ids) {
      this.dataService.decrementHeelSize(i).subscribe(
        (res: any) => {
          console.log(res);
        }
      );
    }
  }

  returnHeelCount(size) {
    console.log('szh', size.heel.length);
    if (size?.heel?.length === 2) {
      if (size?.heel[0]?.heelCount <= 0 && size?.heel[1]?.heelCount <= 0) {
        // console.log(false);
        return true;
      }
    } else if (size?.heel?.length === 1) {
      if (size?.heel[0]?.heelCount <= 0) {
        // console.log(false);
        return true;
      }
    }
    // else {
    //   // console.log(true);
    //   return true;
    // }
  }

}
