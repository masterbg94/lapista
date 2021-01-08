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
      name: 'Home'
    },
    {
      route: '/products',
      name: 'Shoes'
    },
    {
      route: '/about',
      name: 'About'
    },
    {
      route: '',
      name: 'Support'
    },
    {
      route: '/contact',
      name: 'Contact'
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
