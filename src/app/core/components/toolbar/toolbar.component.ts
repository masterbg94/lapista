import {Component, HostListener, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  innerWidth: number;
  subscription: Subscription[] = [];

  constructor(private dataService: DataService) {
    this.innerWidth = window.innerWidth;
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
      name: 'Cipele'
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
