import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { PengertianWebComponent } from './pengertian-web/pengertian-web.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Gladhen2Component } from './gladhen2/gladhen2.component';
import { Gladhen1Component } from './gladhen1/gladhen1.component';
import { Evaluasi1Component } from './evaluasi1/evaluasi1.component';
import { Evaluasi2Component } from './evaluasi2/evaluasi2.component';
import { FormsModule } from '@angular/forms';
import { Uraian2Component } from './uraian2/uraian2.component';
import { Uraian1Component } from './uraian1/uraian1.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    PengertianWebComponent,
    Gladhen2Component,
    Gladhen1Component,
    Evaluasi1Component,
    Evaluasi2Component,
    Uraian2Component,
    Uraian1Component,
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
