import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-form-component',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {
  sendOrderForm: FormGroup;
  durationInSeconds = 2;

  constructor(
    private _formBuilder: FormBuilder,
    private dataService: DataService,
    private _snackBar: MatSnackBar
  ) {
    this.initForm();
  }

  initForm() {
    this.sendOrderForm = this._formBuilder.group({
      firstName: [null],
      lastName: [null],
      email: [''],
      phone: [null, Validators.maxLength(10)],
      address: [null],
      addressUnit: [null],
      note: [''],
      data: localStorage.getItem('cart')
    });
  }

  sendFormData() {
    const sendData = this.sendOrderForm.getRawValue();
    const sendDataJson = JSON.stringify(sendData);
    console.log('sendData', sendData);
    this.dataService.sendOrder(sendDataJson).subscribe(
      (resp: any) => {
        // alert('successfull send');
        this.decrementOnPurchase();
        this.openSnackBar('Uspesno ste izvrsili porudzbinu!', 'Zatvori');
        this.sendOrderForm.reset();
        localStorage.removeItem('cart');
      },
      (error: any) => {
        console.log(error);
        this.openSnackBar('Doslo je do greske', 'Zatvori');
      }
    );
  }

  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
  }

  decrementOnPurchase(){
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const cartItemsIds = cartItems.map(x => x?.heel?.id);
    for (let item of cartItemsIds) {
      this.dataService.decrementHeel(item).subscribe(
        (res: any) => {
          console.log(res);
        }
      );
    }
  }
}
