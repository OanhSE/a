export class User{
  id: string;
  email: string;
  phone: string;
  pwd: string;
  role: string;
  name: string;
  sex: string;
  dayOfBirth: Date;
  active: number;
  status: boolean;

  constructor(email: string, phone: string, pwd: string,
              role: string, name: string, sex: string, dayOfBirth: Date, active: number, status: boolean) {
    this.email = email;
    this.phone = phone;
    this.pwd = pwd;
    this.role = role;
    this.name = name;
    this.sex = sex;
    this.dayOfBirth = dayOfBirth;
    this.active = active;
    this.status = status;
  }
}

