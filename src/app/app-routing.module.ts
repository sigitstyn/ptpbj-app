import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PengertianWebComponent } from './pengertian-web/pengertian-web.component';
import { Gladhen2Component } from './gladhen2/gladhen2.component';
import { Evaluasi1Component } from './evaluasi1/evaluasi1.component';
import { Gladhen1Component } from './gladhen1/gladhen1.component';
import { Evaluasi2Component } from './evaluasi2/evaluasi2.component';
import { Uraian2Component } from './uraian2/uraian2.component';
import { Uraian1Component } from './uraian1/uraian1.component';
const routes: Routes = [
  {path: 'https://ptpbj.netlify.app/pengertian-web', component: PengertianWebComponent},
  {path: 'gladhen1', component: Gladhen1Component},
  {path: 'gladhen2', component: Gladhen2Component},
  {path: 'evaluasi1', component: Evaluasi1Component},
  {path: 'evaluasi2', component: Evaluasi2Component},
  {path: 'uraian2', component: Uraian2Component},
  {path: 'uraian1', component: Uraian1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
