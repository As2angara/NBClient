import { Component, OnInit } from '@angular/core';
import {OrderDashboardComponent} from '../../../ordering/components/order-dashboard/order-dashboard.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-menu-landing',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

 openOrderDashboard() {
   this.dialog.open(OrderDashboardComponent, {
     maxHeight: '80vh',
     maxWidth: '80vw',
   });
  }

}
