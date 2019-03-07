import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalesModel } from '../sales/sales.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private BASE_URL_SALES = "http://localhost:8080/vendas"
  private URL_ALL_SALES = `${this.BASE_URL_SALES}\\todas`;
  private URL_SEND_SALES = `${this.BASE_URL_SALES}\\adicionar`;


constructor(private http: HttpClient) {

}

getAllSales(): Observable<SalesModel[]> {
  return this.http.get<SalesModel[]>(this.URL_ALL_SALES);
}

sendSale(saleModel: SalesModel) : Observable<any>{
  return this.http.post(this.URL_SEND_SALES, saleModel);

}  
}
