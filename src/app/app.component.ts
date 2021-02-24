import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  constructor(private translateService: TranslateService) {
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
}
