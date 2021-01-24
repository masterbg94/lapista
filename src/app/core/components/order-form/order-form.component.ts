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
      email: [null],
      phone: [null, Validators.maxLength(10)],
      address: [null],
      addressUnit: [null],
      note: [''],
    });
  }

  sendFormData() {
    const sendData = this.sendOrderForm.getRawValue();
    const sendDataJson = JSON.stringify(sendData);
    console.log('sendData', sendData);
    this.dataService.sendOrder(sendDataJson).subscribe(
      (resp: any) => {
        // alert('successfull send');
        this.openSnackBar('Uspesna porudzbina', 'Zatvori');
        this.sendOrderForm.reset();
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
}
