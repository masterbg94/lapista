import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-product-text',
  templateUrl: 'product-detail-text.component.html',
  styleUrls: ['product-detail-text.component.scss'],
})
export class ProductDetailTextComponent implements OnInit {
  @Input() detailText;
  public selectedColor;
  public selectedSize;
  public selectedHeel;
  public allData;
  public itemForSizeId;
  durationInSeconds = 2;
  isBag = false;

  constructor(
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    console.log(this.detailText);
    this.selectedColor = this.detailText.colors[0];
    if ( this.detailText.category.name === 'Bags') {
      this.isBag = true;
      console.log('torba', this.isBag);
    }
  }

  emitChangedColor(x) {
    this.dataService.emitNewColorImage.emit(x.image);
    this.selectedColor = x;
    // TODO kako ova 2 console.loga mogu da sortiraju vrednost koja se prokazuje u HMTL
    console.log('emitChangedColor', x);
    console.log('Sort', x?.sizes.sort((one, two) => (one.sizeName > two.sizeName ? 1 : -1)));
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

  updateCart(x) {
    // this.itemForSizeId = this.detailText.colors.filter(
    //   x => x.id === 2
    // );

    if (x === 'bag') {
      const dataForCart = {
        name: this.detailText.name,
        price: this.detailText.price,
        image:  this.selectedColor ? this.selectedColor.image : this.detailText.image,
        color: this.selectedColor.name,
        // size: this.selectedSize.sizeName,
        // heel: this.selectedHeel,
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

      this.openSnackBar(this.translate.instant('CART.itemInCart'), this.translate.instant('CART.closeSnack'));
    } else {
      const dataForCart = {
        name: this.detailText.name,
        price: this.detailText.price,
        image:  this.selectedColor ? 'https://lapista.rs/assets/img/items/' + this.selectedColor.image : this.detailText.image,
        color: this.selectedColor.name,
        size: this.selectedSize.sizeName,
        heel: this.selectedHeel,
        description: this.detailText.description,
      };
      let a = [];
      // Parse the serialized data back into an aray of objects
      a = JSON.parse(localStorage.getItem('cart')) || [];
      // Push the new data (whether it be an object or anything else) onto the array
      a.push(dataForCart);
      // Alert the array value
      localStorage.setItem('cart', JSON.stringify(a));
      console.log(JSON.parse(localStorage.getItem('cart')).length);

      this.openSnackBar(this.translate.instant('CART.itemInCart'), this.translate.instant('CART.closeSnack'));
    }



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
    // TODO: Prebaciti na kraj porudzbine
    /*
    let ls = JSON.parse(localStorage.getItem('cart'));
    // console.log(ls);
    let mapirano = ls.map(x => x?.heel?.id);
    // console.log(mapirano);
    this.decrementHeels(mapirano);
    */
  }

  // TODO: Prebaciti na kraj porudzbine
  /*
  decrementHeels(ids) {
    for (let i of ids) {
      this.dataService.decrementHeelSize(i).subscribe(
        (res: any) => {
          console.log(res);
        }
      );
    }
  }
  */

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

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
