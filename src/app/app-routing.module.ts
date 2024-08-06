import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DanhsachnguoidungComponent } from './phongtro/danhsachnguoidung/danhsachnguoidung.component';
import { QuanlybaidangComponent } from './phongtro/quanlybaidang/quanlybaidang.component';
import { DuyetdonlamchutroComponent } from './phongtro/duyetdonlamchutro/duyetdonlamchutro.component';
import { ThuephongComponent } from './phongtro/thuephong/thuephong.component';
import { TimoghepComponent } from './phongtro/timoghep/timoghep.component';
import { TintucComponent } from './phongtro/tintuc/tintuc.component';
import { HomepagemainComponent } from './phongtro/homepagemain/homepagemain.component';
import { UIAdminComponent } from './phongtro/uiadmin/uiadmin.component';
import { UIUserComponent } from './phongtro/uiuser/uiuser.component';

const routes: Routes = [
  { path: 'uiuser', component: UIUserComponent, children:[
    { path: 'thuephong', component: ThuephongComponent},
    { path: 'timoghep', component: TimoghepComponent},
    { path: 'tintuc', component: TintucComponent},
    { path: 'homepage', component: HomepagemainComponent}
  ]},
  { path: 'uiadmin', component: UIAdminComponent, children:[
    { path: 'danhsachnguoidung', component: DanhsachnguoidungComponent },
    { path: 'quanlybaidang', component: QuanlybaidangComponent},
    { path: 'danhsachduyetchutro', component: DuyetdonlamchutroComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
