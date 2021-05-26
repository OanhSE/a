import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User>;
  private usersSubject: BehaviorSubject<User[]>;
  public user: Observable<User>;
  public uservalue: User ;
  public url = '';
  public apiUrl = 'http://localhost:8080';
  public  users: Observable<User[]>;
  public date = new Date();
  public  list: User[] =  [
    {
    id: 'string', email: 'string', phone: 'string', pwd: 'string',
  role: 'string', name: 'string', sex: 'nam', dayOfBirth: this.date, active: 1,
      status: true

   }
  ];
  listSubject: any;
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(this.uservalue);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;

  }
   login(email: string, pwd: string): Observable<User>{
     let params = new HttpParams();
     params = params.append('email', email);
     params = params.append('pwd', pwd);
     return this.http.post<User>(`${this.apiUrl}/login?email=${email}&pwd=${pwd}`, this.uservalue)
       .pipe(map(user => {
         // store user details and jwt token in local storage to keep user logged in between page refreshes
         localStorage.setItem('user', JSON.stringify(user));
         this.userSubject.next(user);
         return user;
       }));
     // return this.http.post<User>(`${this.apiUrl}/login`, { params})
     //     .pipe(map(user => {
     //       // store user details and jwt token in local storage to keep user logged in between page refreshes
     //       localStorage.setItem('user', JSON.stringify(user));
     //       this.userSubject.next(user);
     //       return user;
     //     }));
   }
  register(user: User): Observable<User>{
    console.log('user', user);
    return  this.http.post<User>(`${this.apiUrl}/signup`, user);
  }
  logOut(user: User): Observable<string>{
    return  this.http.post<string>(`${this.apiUrl}/logout`, user);
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/authen/login']);
  }
  findByPhone(phone: string): Observable<User>{
    return  this.http.get<User>(`${this.apiUrl}/customer/${phone}`);
  }
  getUsers(): Observable<User[]>{
    return  this.http.get<User[]>(`${this.apiUrl}/customers`);
  }
  deleteById(id: string): Observable<string>{
    return  this.http.delete<string>(`${this.apiUrl}/customers/${id}`);
  }
  update(user: User): Observable<User>{
    return  this.http.post<User>(`${this.apiUrl}/customers/update`, user);
  }
  getUserById(id: number): Observable<User>{
    return  this.http.get<User>(`${this.apiUrl}/customers/${id}`);
  }



// // /login
  // login(email , password): Observable<User> {
  //   return this.http.post<User>( this.url + 'login?mail=' + email + '&pwd=' + password , this.uservalue)
  //     .pipe(map(user => {
  //       // store user details and jwt token in local storage to keep user logged in between page refreshes
  //       localStorage.setItem('user', JSON.stringify(user));
  //       this.userSubject.next(user);
  //       return user;
  //     }));
  //
  // }
  // // logout
  // logout(): void {
  //   // remove user from local storage and set current user to null
  //   localStorage.removeItem('user');
  //   this.userSubject.next(null);
  //   this.router.navigate(['/authen/login']);
  // }
  // // register
  // // register(user: User): Observable<User>{
  // //   //  return this.http.post(`${environment.apiUrl}/users/register`, user);
  // //     return this.http.post<User>(this.url + 'signup', user);
  // //   }
  // register(user: User): Observable<User>{
  //   //  return this.http.post(`${environment.apiUrl}/users/register`, user);
  //   this.userSubject = new BehaviorSubject<User>(user);
  //   this.user = this.userSubject.asObservable();
  //   return this.user
  // }
  //   getAll(): Observable<User[]> {
  //    // let  date = new Date();
  //    //
  //    //  let  user = new User('id: string', 'email: string', 'phone: string', 'pwd: string',
  //    //    'role: string', 'name: string', 'sex: string', date, Number(1), true);
  //    //  // for (let i: number = Number(0); i< Number(10); i++){
  //    //  //
  //    //  //
  //    //  //   // this.list.push(user);
  //    //  //
  //    //  // }
  //    //  console.log('this.list', this.list)
  //     this.usersSubject = new BehaviorSubject<User[]>(this.list);
  //     this.users = this.usersSubject.asObservable();
  //   return this.users;
  //   }
  //   addUser(user: User): Observable<User>{
  //   //  return this.http.post(`${environment.apiUrl}/users/register`, user);
  //   this.userSubject = new BehaviorSubject<User>(user);
  //   this.user = this.userSubject.asObservable();
  //   return this.user
  // }
  // editUser(user: User): Observable<User>{
  //   //  return this.http.post(`${environment.apiUrl}/users/register`, user);
  //   this.userSubject = new BehaviorSubject<User>(user);
  //   this.user = this.userSubject.asObservable();
  //   return this.user
  // }
  // deleteUser(id: string): Observable<User>{
  //   //  return this.http.post(`${environment.apiUrl}/users/register`, user);
  //   this.userSubject = new BehaviorSubject<User>(this.uservalue);
  //   this.user = this.userSubject.asObservable();
  //   return this.user
  // }

}
