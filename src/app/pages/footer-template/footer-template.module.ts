import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from '../../../../projects/ionic-selectable/src/lib/ionic-selectable.module';
import { PipesModule } from '../../pipes';
import { FooterTemplatePage } from './footer-template.page';

const routes: Routes = [{
  path: '',
  component: FooterTemplatePage
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IonicSelectableModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FooterTemplatePage
  ]
})
export class FooterTemplatePageModule { }
