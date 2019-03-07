import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientModel } from '../clients/clients.component';

@Injectable({
  providedIn: 'root'
    
}) export class ClientsService {
  private BASE_URL_CLIENTS = "http://localhost:8080/clientes"
  private URL_ALL_CLIENTS = `${this.BASE_URL_CLIENTS}\\todos`;
  private URL_SEND_CLIENT = `${this.BASE_URL_CLIENTS}\\adicionar`;

  constructor(private http: HttpClient) {

  }

  getAllClients(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(this.URL_ALL_CLIENTS);
  }

  sendClient(clientModel: ClientModel) : Observable<any>{
    return this.http.post(this.URL_SEND_CLIENT, clientModel);
  }  
}

