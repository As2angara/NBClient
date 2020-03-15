import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MenuCategory} from '../../../../models/menu-category';
import {MenuItem} from '../../../../models/menu-item';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent implements OnInit {

  @Input() catId: number;
  @Input() menuItems$: Observable<MenuItem[]>;

  constructor() { }

  ngOnInit() {
  }

}
