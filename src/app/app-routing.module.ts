import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DanhsachnguoidungComponent } from './phongtro/danhsachnguoidung/danhsachnguoidung.component';
import { QuanlybaidangComponent } from './phongtro/quanlybaidang/quanlybaidang.component';
import { DuyetdonlamchutroComponent } from './phongtro/duyetdonlamchutro/duyetdonlamchutro.component';

const routes: Routes = [
  { path: 'phongtro/danhsachnguoidung', component: DanhsachnguoidungComponent },
  { path: 'phongtro/quanlybaidang', component: QuanlybaidangComponent},
  { path: 'phongtro/danhsachduyetchutro', component: DuyetdonlamchutroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
