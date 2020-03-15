import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { OrderDashboardComponent } from './components/order-dashboard/order-dashboard.component';
import {MenuComponent} from './components/menu/menu.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';



@NgModule({
  declarations: [MenuComponent, MenuItemComponent, MenuCategoryComponent, OrderDashboardComponent],
  imports: [
    CommonModule
  ]
})

export class OrderingModule { }
