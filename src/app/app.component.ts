import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SaleModalComponent} from './core/components/sale-modal/sale-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'La Pista';
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
    currentLang = this.languages[1];

    constructor(private translateService: TranslateService,
                private modalService: NgbModal,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private titleService: Title) {
        translateService.addLangs(['sr', 'en']);
        translateService.setDefaultLang('sr');
        // default vrednost za jezik koja se izvlaci iz browsera ako ima ako ne onda setuje 'sr'
        // const browserLang = translateService.getBrowserLang();
        // translateService.use(browserLang.match(/sr|en/) ? browserLang : 'sr');
        // fixno koristi sr kao pocetni
        translateService.use('sr');
    }

    setLanguage(l) {
        this.translateService.use(l.value);
        this.currentLang = l;
        // this.langDroped = !this.langDroped;
    }

    ngOnInit(): void {
        this.modalService.open(SaleModalComponent, {centered: true, size: 'lg'});
        //    Router title
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
        ).subscribe(() => {
            // If route module have child than it read child [data:{title:'any'}]
            const childRoute = this.getChild(this.activatedRoute);
            childRoute.data.subscribe(data => {
                this.titleService.setTitle(data.title);
            });
        });
    }

    // If route module have child than it read child [data:{title:'any'}]
    getChild(activatedRoute: ActivatedRoute) {
        if (activatedRoute.firstChild) {
            return this.getChild(activatedRoute.firstChild);
        } else {
            return activatedRoute;
        }
    }
}
