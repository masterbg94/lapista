import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-size-table-modal',
    templateUrl: './size-table-modal.component.html',
    styleUrls: ['./size-table-modal.component.scss']
})
export class SizeTableModalComponent {
    constructor(private activeModal: NgbActiveModal) {
    }

    closeModal() {
        this.activeModal.close();
    }
}
