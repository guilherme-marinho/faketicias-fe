import { APP_ROUTES } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComidasComponent } from './lista-comidas/lista-comidas.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TabelaComidaComponent } from './tabela-comida/tabela-comida.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ListaComidasComponent,
    HomeComponent,
    PagenotfoundComponent,
    TabelaComidaComponent,
    ToolbarComponent,
    DialogExampleComponent
    ],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DialogExampleComponent,
            ListaComidasComponent
          ]
})
export class AppModule { }
