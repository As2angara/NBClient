import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AboutNikoComponent } from './components/about-niko/about-niko.component';
import {MenuComponent} from './components/menu/menu.component';
import {SectionSeparatorComponent} from '../../components/section-separator/section-separator.component';

@NgModule({
  declarations: [HeaderComponent, AboutNikoComponent, MenuComponent, SectionSeparatorComponent],
  exports: [
    HeaderComponent,
    AboutNikoComponent,
    MenuComponent,
    SectionSeparatorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
