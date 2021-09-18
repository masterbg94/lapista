import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FootwearModel} from '../../models/footwear-model';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnChanges {
    @Input() slideItems: FootwearModel[];

    constructor() {
    }

    ngOnInit(): void {
        console.log('this.slideItems', this.slideItems);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('this.slideItems', this.slideItems);
    }

}
