import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FootwearModel} from '../../models/footwear-model';
import {CarouselComponent} from 'angular-responsive-carousel';
import {SliderCarouselModel} from '../../models/slider-carousel.model';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnChanges {
    @Input() slideItems: FootwearModel[];
    sliderSettings: SliderCarouselModel =
        {
        height: 100,
        width: 100,
        cellWidth: 50,
        cellsToShow: 2,
        // cellsToScroll: number,
        loop: true,
        // overflowCellsLimit: number,
        autoplay: true,
        freeScroll: false,
        autoplayInterval: 3000,
        pauseOnHover: true,
        dots: false,
        objectFit: 'contain',
        margin: 10,
        transitionDuration: 500,
        transitionTimingFunction: 'ease-in-out',
        // counter: false,
        // counterSeparator: string,
        borderRadius: 15,
        arrows: true,
        arrowsOutside: true,
        arrowsTheme: 'dark'
    };

    constructor() {
    }

    ngOnInit(): void {
        console.log('this.slideItems', this.slideItems);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('this.slideItems', this.slideItems);
    }

}
