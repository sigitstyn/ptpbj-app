import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PengertianWebComponent } from './pengertian-web/pengertian-web.component';
import { Gladhen2Component } from './gladhen2/gladhen2.component';
import { Evaluasi1Component } from './evaluasi1/evaluasi1.component';
import { Gladhen1Component } from './gladhen1/gladhen1.component';
import { Evaluasi2Component } from './evaluasi2/evaluasi2.component';
import { Uraian2Component } from './uraian2/uraian2.component';
import { Uraian1Component } from './uraian1/uraian1.component';
import { Evaluasi3Component } from './evaluasi3/evaluasi3.component';
import { Gladhen3Component } from './gladhen3/gladhen3.component';
import { CaraNulisComponent } from './cara-nulis/cara-nulis.component';
import { JenisRagamComponent } from './jenis-ragam/jenis-ragam.component';
import { MragakakeComponent } from './mragakake/mragakake.component';
import { GlosariumComponent } from './glosarium/glosarium.component';
const routes: Routes = [
  {path: 'pengertian-web', component: PengertianWebComponent},
  {path: 'gladhen1', component: Gladhen1Component},
  {path: 'gladhen2', component: Gladhen2Component},
  {path: 'evaluasi1', component: Evaluasi1Component},
  {path: 'evaluasi2', component: Evaluasi2Component},
  {path: 'uraian2', component: Uraian2Component},
  {path: 'uraian1', component: Uraian1Component},

  {path: 'evaluasi3', component: Evaluasi3Component},
  {path: 'gladhen3', component: Gladhen3Component},
  {path: 'caraNulis', component: CaraNulisComponent},
  {path: 'jenisRagam', component: JenisRagamComponent},
  {path: 'mragakake', component: MragakakeComponent},
  {path: 'glosarium', component: GlosariumComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
