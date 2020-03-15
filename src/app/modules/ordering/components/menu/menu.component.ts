import { Component, OnInit } from '@angular/core';
import {OnlineMenuService} from '../../services/online-menu.service';
import {Observable} from 'rxjs';
import {MenuItem} from '../../../../models/menu-item';
import {MenuCategory} from '../../../../models/menu-category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems$: Observable<MenuItem[]>;
  menuCategories$: Observable<MenuCategory[]>;

  constructor(private menu: OnlineMenuService) {
    this.menuItems$ = menu.getMenuItems();
    this.menuCategories$ = menu.getMenuCategories();
  }

  ngOnInit() {

  }

}
