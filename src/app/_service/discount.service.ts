import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Discount} from '../_models/discount';
import {relativeToRootDirs} from '@angular/compiler-cli/src/transformers/util';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  private discountsSubject: BehaviorSubject<Discount>;
  public discount: Observable<Discount>;
  public discountvalue: Discount ;
  public url = '';
  public apiurl = 'localhost:8080';
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.discountsSubject = new BehaviorSubject<Discount>(this.discountvalue);
    this.discount = this.discountsSubject.asObservable();
  }
  public get movieValue(): Discount {
    return this.discountsSubject.value;

  }

//   @GetMapping("/discounts")
//   public List<Discount> getAll(){
//     return discountService.getAllDiscount();
//   }
//
//   @GetMapping("/discounts/{id}")
//   public Discount getDiscountById(@PathVariable("id") Long id){
//   return discountService.getDiscountByID(id);
// }
//
// @PostMapping("/discounts")
// public Discount add(@RequestBody Discount discount){
//   return discountService.addDiscount(discount);
// }

// getallDiscount
  getAll(): Observable<Discount[]> {
    return this.http.get<Discount[]>(`${this.apiurl}/discounts`);
  }
  getDiscountById(id: number): Observable<Discount>{
    return  this.http.get<Discount>(`${this.apiurl}/discounts/${id}`);
  }
  addDiscount(discount: Discount): Observable<Discount>{
    return this.http.post<Discount>(`${this.apiurl}/discounts/`, discount);
  }
}
