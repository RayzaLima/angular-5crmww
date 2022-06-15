import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Usuario extends BaseResourceModel {
  constructor(
    public id?:number,
    public nome?: string,
    public email?: string,
    public cpf?: number,
    public senha?: string,
    public telefone?: number
  ){
    super();
  }


  static fromJson(jsonData: any): Usuario {
    return Object.assign(new Usuario(), jsonData);
  }
}
