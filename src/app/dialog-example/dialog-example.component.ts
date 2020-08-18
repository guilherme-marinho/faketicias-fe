import { ComidasService } from './../shared/service/comidas.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  element = {name: '', description: ''}


  constructor(@Inject(MAT_DIALOG_DATA) data, public descriptionService: ComidasService ) {
    
    this.element = data;

   }

  // openDialog(element) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.data = element;
 
  //    this.dialog.open(dialogConfig);
  // }

  ngOnInit(): void {
    
  }
  

  }
    



