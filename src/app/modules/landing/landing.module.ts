import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AboutNikoComponent } from './components/about-niko/about-niko.component';
import {MenuComponent} from './components/menu/menu.component';
import {SectionSeparatorComponent} from '../../components/section-separator/section-separator.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [HeaderComponent, AboutNikoComponent, MenuComponent, SectionSeparatorComponent, ContactUsComponent],
  exports: [
    HeaderComponent,
    AboutNikoComponent,
    MenuComponent,
    SectionSeparatorComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
