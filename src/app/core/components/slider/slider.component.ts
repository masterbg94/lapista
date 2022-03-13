import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {FootwearModel} from '../../models/footwear-model';
import {SliderCarouselModel} from '../../models/slider-carousel.model';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
    @Input() slideItems: FootwearModel[] | Array<string>;
    @Input() slideType = 'product';
    isHandset: boolean;

    constructor(private breakpointObserver: BreakpointObserver) {
    }

    sliderSettings: SliderCarouselModel =
        {
            height: 300,
            width: 100,
            cellWidth: '100%',
            cellsToShow: this.isHandset ? 2 : 4,
            // cellsToScroll: number,
            loop: true,
            // overflowCellsLimit: number,
            autoplay: true,
            freeScroll: false,
            autoplayInterval: 3000,
            pauseOnHover: true,
            dots: true,
            objectFit: 'contain',
            margin: 10,
            transitionDuration: 500,
            transitionTimingFunction: 'ease-in-out',
            // counter: false,
            // counterSeparator: string,
            borderRadius: 15,
            arrows: true,
            arrowsOutside: false,
            arrowsTheme: 'dark'
        };

    ngOnInit(): void {
        this.breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
            console.log('result', result);
            if (result.matches) {
                this.isHandset = result.matches;
            }
        });
    }

}
