import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

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
      route: '',
      name: 'Contact'
    }
  ];

  ngOnInit(): void {
  }

}
