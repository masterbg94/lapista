import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {DataService} from '../../services/data.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {SidebarCloseAnimation, SidebarOpenAnimation} from '../animations';

const animationParams = {
    menuWidth: '250px',
    animationStyle: '500ms ease'
};

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    animations: [
        trigger('sideMenu', [
            transition(':enter', [
                useAnimation(SidebarOpenAnimation, {
                    params: {
                        ...animationParams
                    }
                })
            ]),
            transition(':leave', [
                useAnimation(SidebarCloseAnimation, {
                    params: {
                        ...animationParams
                    }
                })
            ])
        ])
    ]
})
export class ToolbarComponent implements OnInit {
    @ViewChild('languageContainer') languageContainer: ElementRef;
    innerWidth: number;
    subscription: Subscription[] = [];
    ruta;
    languageMenu = false;
    languages: any[] = [
        {
            value: 'sr',
            name: 'Srpski',
            nameShort: 'Sr',
            img: '/assets/img/serbian.png',
        },
        {
            value: 'en',
            name: 'English',
            nameShort: 'En',
            img: 'assets/img/english.png',
        },
    ];
    selectedLanguage = this.languages[0];
    menu = [
        {
            route: '',
            name: 'TOOLBAR.home'
        },
        {
            route: '/products/shoes',
            name: 'TOOLBAR.shoes'
        },
        {
            route: '/products/bags',
            name: 'TOOLBAR.bags'
        },
        {
            route: '/about',
            name: 'TOOLBAR.aboutus'
        },
        // {
        //   route: '',
        //   name: 'Pomoc'
        // },
        {
            route: '/contact',
            name: 'TOOLBAR.contact'
        }
    ];
    mobileMenu: boolean;

    constructor(private dataService: DataService,
                private router: Router,
                private translate: TranslateService) {
        this.innerWidth = window.innerWidth;

        router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
            // console.log('event', event.url);
            this.ruta = event.url;
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
    }

    @HostListener('document:click', ['$event.target'])
    public onClick(target) {
        if (this.languageContainer) {
            // View child element
            const clIn = this.languageContainer.nativeElement;
            // Cela komponenta
            // const clickedInside = this.elementRef.nativeElement.contains(target);
            if (!clIn.contains(target)) {
                this.languageMenu = false;
            }
        }
    }

    ngOnInit(): void {
        this.innerWidth = window.innerWidth;
        // console.log('router', this.router.url);
    }

    goBack() {
        window.history.back();
    }

    returnCountInCart() {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart')).length;
        }
    }

    showLanguages() {
        this.languageMenu = !this.languageMenu;
    }

    setLanguage(language) {
        this.translate.use(language.value);
        this.selectedLanguage = language;
        this.showLanguages();
    }

    toggleMobileMenu() {
        this.mobileMenu = !this.mobileMenu;
    }

    mobileMenuClose() {
        this.mobileMenu = false;
    }
}
