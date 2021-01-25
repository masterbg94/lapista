import {Component, HostListener, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DataService} from '../../services/data.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  innerWidth: number;
  subscription: Subscription[] = [];
  ruta;

  constructor(private dataService: DataService, private router: Router) {
    this.innerWidth = window.innerWidth;

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('event', event.url);
      this.ruta = event.url;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  menu = [
    {
      route: '',
      name: 'Pocetna'
    },
    {
      route: '/products',
      name: 'Obuća'
    },
    {
      route: '#',
      name: 'Torbe'
    },
    {
      route: '/about',
      name: 'O nama'
    },
    {
      route: '',
      name: 'Pomoc'
    },
    {
      route: '/contact',
      name: 'Kontakt'
    }
  ];

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

}
