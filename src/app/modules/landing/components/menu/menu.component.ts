import { Component, OnInit } from '@angular/core';
import {OrderDashboardComponent} from '../../../ordering/components/order-dashboard/order-dashboard.component';
import {MatDialog} from '@angular/material/dialog';
import {MenuCategory} from '../../../../models/menu-category';

@Component({
  selector: 'app-menu-landing',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categories: MenuCategory[];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.categories = [
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
  }

 openOrderDashboard() {
   this.dialog.open(OrderDashboardComponent, {
     maxHeight: '80vh',
     maxWidth: '80vw',
   });
  }

}
