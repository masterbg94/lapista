import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderComponent} from './slider.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [SliderComponent],
    exports: [
        SliderComponent
    ],
    imports: [
        CommonModule,
        IvyCarouselModule,
        RouterModule
    ]
})
export class SliderModule {
}
