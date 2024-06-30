import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MysaleRoutingModule } from './mysale-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MysaleRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class MysaleModule { }
