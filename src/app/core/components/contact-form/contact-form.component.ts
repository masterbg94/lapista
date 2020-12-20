import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  sendMailForm: FormGroup;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  public createForm() {
    this.sendMailForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      subject: [null, [Validators.required]],
      message: [null, [Validators.required, Validators.maxLength(300)]],
    });
  }

  sendMail() {
    const mailData = this.sendMailForm.value;
    const mailDataJSON = JSON.stringify(mailData);
    console.log('mailData', mailData);
    console.log('mailDataJSON', mailDataJSON);
    this.dataService.sendMail(mailData).subscribe(
      (resp: any) => {
        alert('successfull send');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }
}
