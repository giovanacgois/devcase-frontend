import { Component, OnInit } from '@angular/core';
import { SalesService } from '../shared/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  salesArray: SalesModel[] = [];

  model: SalesModel = {
    saleID: '',
    saleClientID: '',
    saleValue: '',
    saleScore: ''

  }

  constructor(private salesService: SalesService) {
  }
  ngOnInit() {
    this.getAllSales();
  }

  public getAllSales() {
    this.salesService.getAllSales().subscribe(
      res => {
        this.salesArray = res;
      },
      err => {
        alert("Aconteceu um erro - contate o suporte!")
      }
    );
  }

  sendSale(): void {
    this.salesService.sendSale(this.model).subscribe(
      res => { location.reload(); },
      err => {
        alert("Um erro aconteceu. Por favor, contate o suporte.")
      }
    );
  }
}

export interface SalesModel {
  saleID: string;
  saleClientID: string;
  saleValue: string;
  saleScore: string,
}
