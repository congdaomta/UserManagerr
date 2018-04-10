import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UserComponent } from './user/user.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { UserFormComponent } from './user-form/user-form.component';

import { LayoutsModule } from './../shared/layouts/layouts.module';
import { ComponentsModule } from './../shared/components/components.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ComponentsModule,
    LayoutsModule,
    SharedModule
  ],
  declarations: [
    UserComponent,
    UserGridComponent,
    UserFormComponent
  ]
})
export class UsersModule { }
