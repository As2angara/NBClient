import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AboutNikoComponent } from './components/about-niko/about-niko.component';
import {MenuComponent} from './components/menu/menu.component';
import {SectionSeparatorComponent} from '../../components/section-separator/section-separator.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import {MatDialogModule} from '@angular/material';
import {OrderingModule} from '../ordering/ordering.module';
import {OrderDashboardComponent} from '../ordering/components/order-dashboard/order-dashboard.component';

@NgModule({
  declarations: [HeaderComponent, AboutNikoComponent, MenuComponent, SectionSeparatorComponent, ContactUsComponent],
  exports: [
    HeaderComponent,
    AboutNikoComponent,
    MenuComponent,
    SectionSeparatorComponent,
    ContactUsComponent
  ],
  entryComponents: [
    OrderDashboardComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    OrderingModule
  ]
})
export class LandingModule { }
