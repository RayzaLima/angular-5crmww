import { Component, Injector } from '@angular/core';
import { Validators } from "@angular/forms";

import { BaseResourceFormComponent } from "../../../shared/components/base-resource-form/base-resource-form.component"

import { Usuario } from "../shared/usuario.model";
import { UsuarioService } from "../shared/usuario.service";


@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent extends BaseResourceFormComponent<Usuario> {

  constructor(protected usuarioService: UsuarioService, protected injector: Injector) {
    super(injector, new Usuario(), usuarioService, Usuario.fromJson)
  }


  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2)]],
      email: [null],
      senha: [null],
      cpf: [null],
      telefone: [null]
    });
  }


  protected creationPageTitle(): string {
    return "Cadastro de Novo Usuário";
  }

  protected editionPageTitle(): string {
    const UsuarioNome = this.resource.nome || "";
    return "Editando Usuário: " + UsuarioNome;
  }
}
