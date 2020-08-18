import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DialogExampleComponent } from './../dialog-example/dialog-example.component';
import { ComidasService } from './../shared/service/comidas.service';
import { Comidas } from './../shared/model/comidas.model';

export interface PeriodicElement {
  name: string;
  position: number;
  price: string;
  description: string;
}


// export const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hamburguer', price: "R$15,00", description: "Duas fatias de pão fofinho, queijo, hamburguer e salada."},
//   {position: 2, name: 'Batata Frita', price: "R$12,99", description: "200g de Batata frita e molho a parte."},
//   {position: 3, name: 'Nuggets', price: "R$9,99", description: "8 unidades de nuggets bem crocantes com molho a parte."},
//   {position: 4, name: 'Milk Shake', price: "R$10,00", description: "600ml de Milk Shake em diversos sabores."}
// ];

@Component({
  selector: 'app-tabela-comida',
  templateUrl: './tabela-comida.component.html',
  styleUrls: ['./tabela-comida.component.css']
})


export class TabelaComidaComponent implements OnInit {
  public listaComidas: Comidas[];
  displayedColumns: string[] = ['position', 'name', 'price', 'buttons'];

  constructor(public dialog: MatDialog, public comidasService: ComidasService ) {}

  openDialog(element) {
    const dialogConfig = new MatDialogConfig();
    this.comidasService.getComida(element.id).subscribe(data => {
      dialogConfig.data = data[element.name];
      this.dialog.open(DialogExampleComponent, dialogConfig);
      console.log(dialogConfig)
    })
    
  }

  ngOnInit(): void {
    this.getComidas();
    
  }
  public getComidas(){
    this.comidasService.getComidas().subscribe(data => {
        this.listaComidas = data.comidas;
      })
  }
  
  
}
