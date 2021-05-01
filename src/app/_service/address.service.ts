import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Address} from '../_models/address';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private addressSubject: BehaviorSubject<Address>;
  public address: Observable<Address>;
  public addressvalue: Address ;
  public url = '';
  public apiUrl = 'http://localhost:8080';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.addressSubject = new BehaviorSubject<Address>(this.addressvalue);
    this.address = this.addressSubject.asObservable();
  }
  public get addressValue(): Address {
    return this.addressSubject.value;

  }

//   @GetMapping("/addresses")
//   public List<Address> getAll(){
//     return addressService.getAll();
//   }
//
//
//   @PostMapping("/addresses")
//   public Address add(@RequestBody Address address){
//   return addressService.add(address);
// }
//
// @GetMapping("/address/{id}")
// public Address getById(@PathVariable Long id){
//   return addressService.getById(id);
// }


// getallAddress
  getAllAddress(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.apiUrl}/addresses` );
  }
  addAdress(address: Address): Observable<Address>{
    return this.http.post<Address>(`${this.apiUrl}/addresses`, address);
  }
  getById(id: number): Observable<Address> {
    return this.http.get<Address>(`${this.apiUrl}/address/${id} `);
  }
  getByCinema(id: number): Observable<Address>{
    return this.http.get<Address>(`${this.apiUrl}/address/getByCinema/${id} `);
  }
//   @GetMapping("/address/getByCinema/{id}")
//   public Address getByCinema(@PathVariable("id") Long id){
//   Address address = addressService.getAddressByCinema(id);
//   return address;
// }
}
