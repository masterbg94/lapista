import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: 'custom-modal.component.html',
  styleUrls: ['custom-modal.component.scss'],
})
export class CustomModalComponent implements OnInit {
  @Input() inputData;
  categoryGroup: FormGroup;
  itemGroup: FormGroup;
  colorGroup: FormGroup;
  sizeGroup: FormGroup;
  resolvedForm;
  saveData: any;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    console.log(this.inputData);

    if (this.inputData.type === 'edit') {
      this.setCategory(this.inputData.what);
    }
  }

  initForm() {
    this.categoryGroup = this.formBuilder.group({
      // id: [null],
      name: [null],
    });

    this.itemGroup = this.formBuilder.group({
      // id: [null],
      name: [null],
      price: [null],
      description: [null],
      image: [null],
    });

    this.colorGroup = this.formBuilder.group({
      // id: [null],
      name: [null],
      status: [null],
      image: [null],
      hex: [null],
    });

    this.sizeGroup = this.formBuilder.group({
      // id: [null],
      sizeName: [null],
      sizeCount: [null],
    });
  }

  // Set data if edit
  setCategory(serviceType) {
    this.dataService.getModalDataById(this.inputData.id, serviceType).subscribe(
      (res: any) => {
        console.log('res', res);
        this.fillForm(res.data, serviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fillForm(data: any, serviceType) {
    switch (serviceType) {
      case 'category':
        this.categoryGroup.setValue({
          // id: data.id,
          name: data.name,
        });
        break;
      case 'item':
        this.itemGroup.setValue({
          // id: data.id,
          name: data.name,
          price: data.price,
          description: data.description,
          image: data.image,
        });
        break;
      case 'color':
        this.colorGroup.setValue({
          // id: data.id,
          name: data.name,
          status: data.status,
          image: data.image,
          hex: data.hex,
        });
        break;
      case 'size':
        this.sizeGroup.setValue({
          sizeName: data.sizeName,
          sizeCount: data.sizeCount,
        });
        break;
    }
  }

  updateForm() {
    if (this.inputData.what === 'category') {
      const saveDataRaw = this.categoryGroup.getRawValue();
      this.saveData = {
        name: saveDataRaw.name,
      };
    } else if (this.inputData.what === 'item') {
      const saveDataRaw = this.itemGroup.getRawValue();
      this.saveData = {
        name: saveDataRaw.name,
        price: saveDataRaw.price,
        description: saveDataRaw.description,
        image: saveDataRaw.image,
      };
    } else if (this.inputData.what === 'color') {
      const saveDataRaw = this.colorGroup.getRawValue();
      this.saveData = {
        name: saveDataRaw.name,
        status: saveDataRaw.status,
        image: saveDataRaw.image,
        hex: saveDataRaw.hex,
      };
    } else if (this.inputData.what === 'size') {
      const saveDataRaw = this.sizeGroup.getRawValue();
      this.saveData = {
        sizeName: saveDataRaw.sizeName,
        sizeCount: saveDataRaw.sizeCount,
      };
    }

    if (this.inputData.type === 'edit') {
      this.dataService
        .updateModalItem(this.inputData.id, this.saveData, this.inputData.what)
        .subscribe(
          (res: any) => {
            this.activeModal.close();
            this.dataService.emitAddNewFromModal.emit(true);
            alert('Successfully updated');
          },
          (error: any) => {
            console.log('error', error);
          }
        );
    } else {
      this.dataService.createModalItem(this.saveData, this.inputData.what).subscribe(
        (res: any) => {
          this.activeModal.close();
          this.dataService.emitAddNewFromModal.emit(true);
          alert('Successfully updated');
        },
        (error: any) => {
          console.log('error', error);
        }
      );
    }
  }
}
