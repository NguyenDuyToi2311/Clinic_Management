import { ChuyenKhoa } from "./ChuyenKhoa";

export class BacSi {
  
  MaBS: number = 0;
  TenBS: any;
  MaCK: number = 0;
  SDT: string = "";
  Password: string = "";
  UserType: string = "Doctor";
  HinhAnh: string = "user.png";
  Email: string = "";

  ChuyenKhoa: ChuyenKhoa[] = []
}
