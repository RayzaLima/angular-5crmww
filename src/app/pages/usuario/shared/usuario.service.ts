import { Injectable, Injector } from '@angular/core';
import { Usuario } from "./usuario.model";

import { BaseResourceService } from "../../../shared/services/base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseResourceService<Usuario> {

  constructor(protected injector: Injector) {
    super("usuario", injector, Usuario.fromJson);
  }

}
