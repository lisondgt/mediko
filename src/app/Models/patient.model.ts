export class PatientModel {

  constructor(
    public firstname: string,
    public lastname: string,
    public birth: Date,
    public email:string,
    public phone: string,
    public address:string,
    public gender: Array<string>,
  ) {  }

}
