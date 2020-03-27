import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MenuItem} from '../../../models/menu-item';
import {MenuCategory} from '../../../models/menu-category';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  private itemsUrl = '/assets/data/menu-items.json';
  private categoryUrl = '/assets/data/menu-categories.json';

  constructor(private httpClient: HttpClient) { }

  getMenuItems(): Observable<MenuItem[]> {
    return this.httpClient.get<MenuItem[]>(this.itemsUrl);
  }

  getMenuCategories(): Observable<MenuCategory[]> {
    return this.httpClient.get<MenuCategory[]>(this.categoryUrl);
  }
}
