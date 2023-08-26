import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly PhotoUrl = "https://localhost:44352/Photos/";
  constructor(private http: HttpClient) { }

  //Bệnh nhân
  getListBenhNhan() {
    return this.http.get<any>('https://localhost:44352/api/BenhNhan');
  }
  getByMaBN(val: any) {
    return this.http.get('https://localhost:44352/api/BenhNhan/' + val);
  }
  addBenhNhan(val: any) {
    return this.http.post('https://localhost:44352/api/BenhNhan', val);
  }
  updateBenhNhan(val: any) {
    return this.http.put('https://localhost:44352/api/BenhNhan', val);
  }
  deleteBenhNhan(val: any) {
    return this.http.delete('https://localhost:44352/api/BenhNhan/' + val);

  }

  getLichKhamChoDuyetMaBN(val: any) {
    val = Number.parseInt(val);
    return this.http.get('https://localhost:44352/api/BenhNhan/LichKhamChoDuyet/' + val);
  }
  getLichKhamChoKhamMaBN(val: any) {
    return this.http.get('https://localhost:44352/api/BenhNhan/LichKhamChoKham/' + val);
  }
  getLichKhamCompleteMaBN(val: any) {
    return this.http.get('https://localhost:44352/api/BenhNhan/LichKhamComplete/' + val);
  }
  GetPhieuKhamBN(val: any) {
    return this.http.get('https://localhost:44352/api/BenhNhan/GetPhieuKhamBN/' + val);
  }



  //Chuyên khoa

  getChuyenKhoa() {
    return this.http.get<any>('https://localhost:44352/api/ChuyenKhoa');
  }
  getMaCK(val: any) {
    return this.http.get('https://localhost:44352/api/ChuyenKhoa/' + val);
  }
  addChuyenKhoa(val: any) {
    return this.http.post('https://localhost:44352/api/ChuyenKhoa', val);
  }

  updateChuyenKhoa(val: any) {
    return this.http.put('https://localhost:44352/api/ChuyenKhoa', val);
  }
  deleteChuyenKhoa(val: any) {
    return this.http.delete('https://localhost:44352/api/ChuyenKhoa/' + val);
  }



  //Bác sĩ
  getDoctorList() {
    return this.http.get<any>('https://localhost:44352/api/BacSi');
  }
  deleteBacSi(val: any) {
    return this.http.delete('https://localhost:44352/api/BacSi/' + val);
  }
  getByMaBS(val: any) {
    return this.http.get('https://localhost:44352/api/BacSi/' + val);
  }
  addBacSi(val: any) {
    return this.http.post('https://localhost:44352/api/BacSi', val);
  }
  updateBacSi(val: any) {
    return this.http.put('https://localhost:44352/api/BacSi', val);
  }


  //Lấy lịch khám chờ xét duyệt theo mã bác sĩ
  getLichKhamChoDuyet(val: any) {
    val = Number.parseInt(val);
    return this.http.get('https://localhost:44352/api/BacSi/LichKhamChoDuyet/' + val);
  }
  getLichKhamChoKham(val: any) {
    return this.http.get('https://localhost:44352/api/BacSi/LichKhamChoKham/' + val);
  }
  getLichKhamComplete(val: any) {
    return this.http.get('https://localhost:44352/api/BacSi/LichKhamComplete/' + val);
  }

  updateLichKham(val: any) {
    return this.http.put('https://localhost:44352/api/LichKham', val);
  }
  deleteLichKham(val: any) {
    return this.http.delete('https://localhost:44352/api/LichKham/' + val);
  }
  getLichKhamByMaLK(val: any) {
    return this.http.get('https://localhost:44352/api/LichKham/' + val);
  }

  //Lấy tất cả lịch khám
  GetAllLichKham() {
    return this.http.get('https://localhost:44352/api/LichKham');
  }

  // Lưu trữ Image
  UploadPhoto(val: any) {
    return this.http.post('https://localhost:44352/api/Image/SaveFile', val);
  }



  //Lịch khám
  addLichKham(val: any) {
    return this.http.post('https://localhost:44352/api/LichKham', val);
  }


  //Phiếu khám bệnh
  addPhieuKham(val: any) {
    return this.http.post('https://localhost:44352/api/PhieuKham', val);
  }
  deletePhieuKham(val: any) {
    return this.http.delete('https://localhost:44352/api/PhieuKham/' + val);
  }

  ListPhieuKhamBenh() {
    return this.http.get<any>('https://localhost:44352/api/PhieuKham');
  }
  GetPhieuKhamByMaPK(val: any) {
    return this.http.get('https://localhost:44352/api/PhieuKham/' + val);
  }
  UpdatePhieuKham(val: any) {
    return this.http.put('https://localhost:44352/api/PhieuKham', val);
  }
  //Hóa Đơn
  GetHoaDonByMaHD(val: any) {
    return this.http.get('https://localhost:44352/api/PhieuKham/GetHoaDonByMaHD/' + val);
  }
  updateHoaDon(val: any) {
    return this.http.put('https://localhost:44352/api/HoaDon', val);
  }
  deleteHoaDon(val: any) {
    return this.http.delete('https://localhost:44352/api/HoaDon/' + val);
  }

}
