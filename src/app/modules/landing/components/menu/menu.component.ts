import { Component, OnInit } from '@angular/core';
import {OrderDashboardComponent} from '../../../ordering/components/order-dashboard/order-dashboard.component';
import {MatDialog} from '@angular/material/dialog';
import {MenuCategory} from '../../../../models/menu-category';
import {MenuItem} from '../../../../models/menu-item';
import {OnlineMenuService} from '../../../ordering/services/online-menu.service';
import {Observable} from 'rxjs';

const cat = [
  {
    id: 2,
    name: 'Entrees'
  },
  {
    id: 3,
    name: 'Sides'
  },
  {
    id: 4,
    name: 'Desserts'
  }
];


@Component({
  selector: 'app-menu-landing',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categories: MenuCategory[];
  items$: Observable<MenuItem[]>;

  constructor(private dialog: MatDialog,
              private menu: OnlineMenuService) { }

  ngOnInit() {
    this.categories = cat;
    this.items$ = this.menu.getMenuItems();
  }

 openOrderDashboard() {
   this.dialog.open(OrderDashboardComponent, {
     maxHeight: '80vh',
     maxWidth: '80vw',
   });
  }

}
