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
import { EditUserComponent } from './phongtro/edit-user/edit-user.component';
import { ChangePasswordContentComponent } from './phongtro/change-password-content/change-password-content.component';
import { EditProfileContentComponent } from './phongtro/edit-profile-content/edit-profile-content.component';
import { FindRoommateComponent } from './phongtro/find-roommate/find-roommate.component';
import { NewListContentComponent } from './phongtro/new-list-content/new-list-content.component';
import { RegisterOwnerContentComponent } from './phongtro/register-owner-content/register-owner-content.component';

const routes: Routes = [
  { path: 'uiuser', component: UIUserComponent, children:[
    { path: 'thuephong', component: ThuephongComponent},
    { path: 'timoghep', component: TimoghepComponent},
    { path: 'tintuc', component: TintucComponent},
    { path: 'homepage', component: HomepagemainComponent, children:[
      { path: 'thuephong_home', component: ThuephongComponent},
      { path: 'timoghep_home', component: TimoghepComponent},
      { path: 'tintuc_home', component: TintucComponent}
    ]},
    { path: 'edituser', component: EditUserComponent, children:[
      { path: 'post-for-roommate', component: FindRoommateComponent },
      { path: 'edit-profile', component: EditProfileContentComponent },
      { path: 'change-password', component: ChangePasswordContentComponent },
      { path: 'news-list', component: NewListContentComponent },
      { path: 'register-owner', component: RegisterOwnerContentComponent },
    ]},
  ]},
  { path: 'uiadmin', component: UIAdminComponent, children:[
    { path: 'danhsachnguoidung', component: DanhsachnguoidungComponent },
    { path: 'quanlybaidang', component: QuanlybaidangComponent},
    { path: 'danhsachduyetchutro', component: DuyetdonlamchutroComponent},
    { path: 'homepage', component: HomepagemainComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
