export class PatientModel {

  constructor(
    public id: string,
    public firstname: string,
    public lastname: string,
    public birth: string,
    public email:string,
    public phone: string,
    public address:string,
    public gender: string,
  ) {  }

}
