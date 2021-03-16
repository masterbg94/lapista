import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-sale-modal-component',
    templateUrl: './sale-modal.component.html',
    styleUrls: ['./sale-modal.component.scss']
})
export class SaleModalComponent {
    constructor(private activeModal: NgbActiveModal) {
    }

    closeModal() {
        this.activeModal.close();
    }
}
