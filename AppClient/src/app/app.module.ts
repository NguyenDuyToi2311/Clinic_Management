import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAdminLayoutComponent } from './layout/app-admin-layout/app-admin-layout.component';
import { AppUserLayoutComponent } from './layout/app-user-layout/app-user-layout.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { LoginComponent } from './components/login/login.component';
import { ChuyenKhoaComponent } from './components/chuyen-khoa/chuyen-khoa.component';
import { ListBacSiComponent } from './components/bacsi/list-bac-si/list-bac-si.component';
import { AddBacSiComponent } from './components/bacsi/add-bac-si/add-bac-si.component';
import { EditBacSiComponent } from './components/bacsi/edit-bac-si/edit-bac-si.component';
import { ListBenhNhanComponent } from './components/benhnhan/list-benh-nhan/list-benh-nhan.component';
import { AddBenhNhanComponent } from './components/benhnhan/add-benh-nhan/add-benh-nhan.component';
import { EditBenhNhanComponent } from './components/benhnhan/edit-benh-nhan/edit-benh-nhan.component';
import { ChitietBacSiComponent } from './components/chitiet-bac-si/chitiet-bac-si.component';
import { ListDoctorComponent } from './components/list-doctor/list-doctor.component';
import { ProfileBSComponent } from './components/profile-bs/profile-bs.component';
import { ChoKhamBSComponent } from './components/cho-kham-bs/cho-kham-bs.component';
import { DaKhamBSComponent } from './components/da-kham-bs/da-kham-bs.component';
import { AddPhieuKhamBenhComponent } from './components/add-phieu-kham-benh/add-phieu-kham-benh.component';
import { ListLichKhamComponent } from './components/list-lich-kham/list-lich-kham.component';
import { ListHoaDonComponent } from './components/list-hoa-don/list-hoa-don.component';
import { ListPhieuKhamComponent } from './components/list-phieu-kham/list-phieu-kham.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileBenhNhanComponent } from './components/profile-benh-nhan/profile-benh-nhan.component';
import { ChoKhamBenhNhanComponent } from './components/cho-kham-benh-nhan/cho-kham-benh-nhan.component';
import { DaKhamBenhNhanComponent } from './components/da-kham-benh-nhan/da-kham-benh-nhan.component';
import { ListPhieuKhamBNComponent } from './components/list-phieu-kham-bn/list-phieu-kham-bn.component';
import { DoctorGuard } from './guards/doctor.guard';
import { EditLichKhamComponent } from './components/edit-lich-kham/edit-lich-kham.component';
import { EditHoaDonComponent } from './components/edit-hoa-don/edit-hoa-don.component';
import { EditPhieuKhamComponent } from './components/edit-phieu-kham/edit-phieu-kham.component';



@NgModule({
  declarations: [

    AppComponent,
    AppAdminLayoutComponent,
    AppUserLayoutComponent,
    AdminDashboardComponent,
    HomeComponent,
    LoginComponent,
    ChuyenKhoaComponent,
    AdminLoginComponent,
    ListBacSiComponent,
    AddBacSiComponent,
    EditBacSiComponent,
    ListBenhNhanComponent,
    AddBenhNhanComponent,
    EditBenhNhanComponent,
    ChitietBacSiComponent,
    ListDoctorComponent,
    ProfileBSComponent,
    ChoKhamBSComponent,
    DaKhamBSComponent,
    AddPhieuKhamBenhComponent,
    ListLichKhamComponent,
    ListHoaDonComponent,
    AboutComponent,
    ProfileBenhNhanComponent,
    ChoKhamBenhNhanComponent,
    DaKhamBenhNhanComponent,
    ListPhieuKhamBNComponent,
    ListPhieuKhamComponent,
    EditLichKhamComponent,
    EditHoaDonComponent,
    EditPhieuKhamComponent


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'Admin/login', component: AdminLoginComponent },
      {
        path: 'Admin',
        component: AppAdminLayoutComponent,
        children: [
          { path: '', component: AdminDashboardComponent, canActivate: [AdminGuard] },

          { path: 'Chuyenkhoa', component: ChuyenKhoaComponent, canActivate: [AdminGuard] },

          { path: 'Bacsi', component: ListBacSiComponent, canActivate: [AdminGuard] },
          { path: 'Bacsi/create', component: AddBacSiComponent, canActivate: [AdminGuard] },
          { path: "Bacsi/edit/:id", component: EditBacSiComponent, canActivate: [AdminGuard] },

          { path: 'Benhnhan', component: ListBenhNhanComponent, canActivate: [AdminGuard] },
          { path: 'Benhnhan/edit/:id', component: EditBenhNhanComponent, canActivate: [AdminGuard] },


          { path: 'Hoadon', component: ListHoaDonComponent, canActivate: [AdminGuard] },
          { path: 'Phieukhambenh', component: ListPhieuKhamComponent, canActivate: [AdminGuard] },
          { path: 'Lichkham', component: ListLichKhamComponent, canActivate: [AdminGuard] },
          { path: 'Lichkham/edit/:id', component: EditLichKhamComponent, canActivate: [AdminGuard] },
          { path: 'Hoadon/edit/:id', component: EditHoaDonComponent, canActivate: [AdminGuard] },

          { path: 'Phieukhambenh/edit/:id', component: EditPhieuKhamComponent, canActivate: [AdminGuard] }
        ]
      },
      {
        path: '',
        component: AppUserLayoutComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'About', component: AboutComponent },
          { path: 'login', component: LoginComponent },

          { path: 'register', component: AddBenhNhanComponent },
          { path: 'list-bacsi', component: ListDoctorComponent },//xem danh sách bác sĩ
          { path: 'Bacsi/detail/:id', component: ChitietBacSiComponent },//Chi tiết thông tin bác sĩ


          { path: 'Bacsi', component: ProfileBSComponent, canActivate: [DoctorGuard] },
          { path: 'Bacsi/chokham', component: ChoKhamBSComponent, canActivate: [DoctorGuard] },
          { path: 'Bacsi/dakham', component: DaKhamBSComponent, canActivate: [DoctorGuard] },
          { path: 'Bacsi/phieukham/:id', component: AddPhieuKhamBenhComponent, canActivate: [DoctorGuard] },

          { path: 'Benhnhan', component: ProfileBenhNhanComponent, canActivate: [AuthGuard] },
          { path: 'Benhnhan/chokham', component: ChoKhamBenhNhanComponent, canActivate: [AuthGuard] },
          { path: 'Benhnhan/dakham', component: DaKhamBenhNhanComponent, canActivate: [AuthGuard] },
          { path: 'Benhnhan/list-phieu-kham', component: ListPhieuKhamBNComponent, canActivate: [AuthGuard] },
        ]
      },
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
