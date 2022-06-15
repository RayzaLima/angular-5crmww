import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

@NgModule({
  imports: [
    SharedModule,
    UsuarioRoutingModule
  ],
  declarations: [UsuarioListComponent, UsuarioFormComponent]
})
export class UsuarioModule { }
