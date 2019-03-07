import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ClientsService } from '../shared/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  genders = ['Feminino', 'Masculino'];
  clientsArray: ClientModel[] = [];

  model: ClientModel = {
    clientID:'',
    clientName: '',
    clientCPF: '',
    clientBday: '',
    clientGender: '',
    clientPhone: '',
    clientEmail: '',
    clientAddress: '',
    clientCity: '',
    clientZipCode: ''
  };

  constructor(private clientsService: ClientsService) {

  }

  ngOnInit() {
    this.getAllClients();
  }

  public getAllClients() {
    this.clientsService.getAllClients().subscribe(
        res => {
          this.clientsArray = res;
        },
        err => {
          alert("Aconteceu um erro - contate o suporte!")
        }
    );
  }

  sendClient(): void {
    this.clientsService.sendClient(this.model).subscribe(
      res => { location.reload(); },
      err => {
        alert("Um erro aconteceu. Por favor, contate o suporte.")
      }
    );
  }
}

export interface ClientModel {
  clientID: string;
  clientName: string;
  clientCPF: string;
  clientBday: string,
  clientGender: string,
  clientPhone: string,
  clientEmail: string,
  clientAddress: string,
  clientCity: string,
  clientZipCode: string,
}