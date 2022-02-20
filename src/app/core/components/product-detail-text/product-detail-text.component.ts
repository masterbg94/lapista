import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SizeTableModalComponent} from '../size-table-modal/size-table-modal.component';
import {ColorConst} from '../../color-const';

@Component({
    selector: 'app-product-text',
    templateUrl: 'product-detail-text.component.html',
    styleUrls: ['product-detail-text.component.scss'],
})
export class ProductDetailTextComponent implements OnInit {
    @Input() detailText;
    @Input() productTextType = 'identita-type';
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
        private translate: TranslateService,
        private modal: NgbModal
    ) {
    }

    ngOnInit(): void {
        // ako se prikazuje item sa izborom za boju , na lapista modelima ne
        if (this.productTextType === 'identita-type') {
            this.selectedColor = this.detailText.colors[0];
            if (this.detailText.category.name === 'Bags') {
                this.isBag = true;
                console.log('torba', this.isBag);
            }
        }
        /*else {
            console.log('@Input() productTextType', this.productTextType);
            console.log('@Input(): this.detailText', this.detailText);
        }*/
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
        if (x === 'bag') {
            const dataForCart = {
                name: this.detailText.name,
                price: this.detailText.price,
                image: this.selectedColor ? 'https://lapista.rs/assets/img/items/' + this.selectedColor.image : this.detailText.image,
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
        } else if (x === 'lapista') {
            // console.log('lapista');
            // console.log('this.detailText', this.detailText);
            const dataForCartLapista = {
                name: this.detailText.item.name,
                price: this.detailText.item.sale !== 0 ? (this.detailText.item.price - (this.detailText.item.price / 100 * this.detailText.item.sale)) : this.detailText.item.price,
                image: 'https://lapista.rs/assets/img/items/' + this.detailText.image,
                color: this.detailText.name,
                size: this.selectedSize.sizeName,
                heel: this.selectedHeel,
                description: this.detailText.description,
            };
            let a = [];
            // Parse the serialized data back into an aray of objects
            a = JSON.parse(localStorage.getItem('cart')) || [];
            // Push the new data (whether it be an object or anything else) onto the array
            a.push(dataForCartLapista);
            // Alert the array value
            localStorage.setItem('cart', JSON.stringify(a));
            // Test cart after adding product to cart
            console.log(JSON.parse(localStorage.getItem('cart')).length);

            this.openSnackBar(this.translate.instant('CART.itemInCart'), this.translate.instant('CART.closeSnack'));
        } else {
            const dataForCart = {
                name: this.detailText.name,
                price: this.detailText?.sale ? ((this.detailText?.price) - (this.detailText?.price / 100 * this.detailText?.sale)) : this.detailText?.price,
                image: this.selectedColor ? 'https://lapista.rs/assets/img/items/' + this.selectedColor.image : this.detailText.image,
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
    }

    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: this.durationInSeconds * 1000,
        });
    }

    openModal() {
        this.modal.open(SizeTableModalComponent, {scrollable: true});
    }

    /*Return color*/
    returnColorFromConst(x) {
        return ColorConst[x.toUpperCase()];
    }
}
