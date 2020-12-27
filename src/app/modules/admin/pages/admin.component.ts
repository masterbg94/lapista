import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {DataService} from '../../../core/services/data.service';
import {CustomModalService} from '../../../core/services/custom-modal.service';
import {CustomModalComponent} from '../../../core/components/custom-modal/custom-modal.component';
import {Subscription} from 'rxjs';

export interface CategoryTable {
  name: string;
  id: number;
}

@Component({
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss']
}) export class AdminComponent implements OnInit{

  innerWidth;
  dataSource;
  selectedData;
  subscription: Subscription[] = [];

  constructor(private breakpointObserver: BreakpointObserver,
              private dataService: DataService,
              private modalService: CustomModalService
  ) {
    this.innerWidth = window.innerWidth;
  }

  getDataForSelected(x) {
    this.selectedData = x;
    if (x === 'category') {
      this.getAllCategories();
    }
    if (x === 'item') {
      this.getAllProducts();
    }
    if (x === 'color') {
      this.getAllColors();
    }
    if (x === 'size') {
      this.getAllSizes();
    }
  }

  // CATEGORIES
  getAllCategories() {
    this.dataService.getAllCategories().subscribe(
      (res: any) => {
        this.dataSource = res.data;
      }, (error: any) => {
        alert(error);
      }
    );
  }
  // PRODUCTS
  getAllProducts() {
    this.dataService.getAllItems().subscribe(
      (res: any) => {
        this.dataSource = res.data;
      }, (error: any) => {
        alert(error);
      }
    );
  }
  // COLORS
  getAllColors() {
    this.dataService.getAllColors().subscribe(
      (res: any) => {
        this.dataSource = res.data;
      }, (error: any) => {
        alert(error);
      }
    );
  }
  // SIZES
  getAllSizes() {
    this.dataService.getAllSizes().subscribe(
      (res: any) => {
        this.dataSource = res.data;
      }, (error: any) => {
        alert(error);
      }
    );
  }

  openCreateModal(x) {
    const data = {
      type: 'new',
      id: null,
      what: x
    };
    this.modalService.openModal(CustomModalComponent, data, '', '');
  }

  openEditModal(what , id) {
    const data = {
      type: 'edit',
      id,
      what
    };
    this.modalService.openModal(CustomModalComponent, data, '', '');
  }

  ngOnInit(): void {
    this.selectedData = 'category';
    this.getDataForSelected(this.selectedData);
    this.subscription.push(
      this.dataService.emitAddNewFromModal.subscribe(
        (res) => {
          if (res) {
            window.location.reload();
          }
        }
      )
    )
  }
}
