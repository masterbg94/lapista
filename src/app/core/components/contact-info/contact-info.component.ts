import {Component} from '@angular/core';

@Component({
    selector: 'app-contact-info-component',
    templateUrl: './contact-info.component.html',
    styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent {
    title = 'La Pista';
    lat = 44.80643839777886;
    lng = 20.405816737403303;
}
