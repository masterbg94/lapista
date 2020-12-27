import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class CustomModalService {
  constructor(private modalService: NgbModal) {}

  /**
   * Open modal function
   *
   * @param component Any
   * @param inputData Any
   * @param customClass String
   * @param modalSize Any
   */
  public openModal(component: any, inputData?: any, customClass?: string, modalSize?: any) {
    const modal = this.modalService.open(component, modalSize);
    if (inputData !== null) {
      modal.componentInstance.inputData = inputData;
    }
    const instance = (modal as any)._windowCmptRef.instance;
    setTimeout(() => {
      instance.windowClass = `modal-animation${customClass !== null ? ` ${customClass}` : ''}`;
    });

    const fx = (modal as any)._removeModalElements.bind(modal);
    (modal as any)._removeModalElements = () => {
      instance.windowClass = '';
      setTimeout(fx, 250);
    };
    return modal;
  }

  /**
   * Dismiss modal function
   */
  public dismissModal(): any {
    this.modalService.dismissAll();
  }
}
