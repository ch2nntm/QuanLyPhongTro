import { Component } from '@angular/core';
import { max } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Location {
  Id: string;
  Name: string;
  Districts?: District[];
}

interface District {
  Id: string;
  Name: string;
  Wards?: Ward[];
}

interface Ward {
  Id: string;
  Name: string;
}

@Component({
  selector: 'app-thuephong',
  templateUrl: './thuephong.component.html',
  styleUrl: './thuephong.component.css'
})
export class ThuephongComponent {
  start_price=0;
  end_price=50000000;
  start_acreage=0;
  end_acreage=150;
  selectedTypeHome: string = '';
  searchTypeHome: string='Tất cả';
  click_Search: boolean=false;
  isclick_btnKind=false;
  isclick_btnAddress=false;
  isclick_btnAcreage=false;
  isclick_btnPrice=false;
  isclick_btnFilter=false;
  activeItem: string | null = null;
  infs=[
    {
      'id': 1,
      'avt': 'Avatar.png',
      'name':'Trần Văn Dụ',
      'des':'Quỹ căn cho thuê từ 1PN - 4PN giá rẻ chỉ 2PN giá chỉ 13 tr/tháng LH 0702 272634',
      'fee': 10,
      'acreage': 40,
      'address': 'Cầu giấy, Hà Nội',
      'img':'pic_rent1.png, pic_rent2.png, pic_rent3.png',
      'time': '04/03/2024',
      'phone': '0493948594',
      'islike': false,
    },
    {
      'id': 2,
      'avt': 'Avatar.png',
      'name':'Trần Văn Dụ',
      'des':'Quỹ căn cho thuê từ 1PN - 4PN giá rẻ chỉ 2PN giá chỉ 13 tr/tháng LH 0702 272634',
      'fee': 10,
      'acreage': 40,
      'address': 'Cầu giấy, Hà Nội',
      'img':'pic_rent1.png, pic_rent2.png, pic_rent3.png',
      'time': '02/01/2024',
      'phone': '0493948594',
      'islike': true,
    },
    {
      'id': 3,
      'avt': 'Avatar.png',
      'name':'Trần Lan',
      'des':'Quỹ căn cho thuê từ 1PN - 4PN giá rẻ chỉ 2PN giá chỉ 13 tr/tháng LH 0702 272634',
      'fee': 10,
      'acreage': 40,
      'address': 'Cầu giấy, Hà Nội',
      'img':'pic_rent1.png, pic_rent2.png, pic_rent3.png',
      'time': '02/01/2025',
      'phone': '0493948594',
      'islike': true,
    }
  ]

  LikeInf(id: number) {
    const item = this.infs.find(inf => inf.id === id);
    if (item) {
      item.islike = !item.islike;
    }
    // console.log("Id " + item?.id + " with like is: " + item?.islike);
  }

  toggleArrowKind(item: string) {
    const button = document.getElementById('dropdownMenuButton1');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isclick_btnKind=!this.isclick_btnKind;
    }
  }

  toggleArrowAddress(item: string) {
    const button = document.getElementById('dropdownMenuButton2');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isclick_btnAddress=!this.isclick_btnAddress;
    }
  }

  toggleArrowAcreage(item: string) {
    const button = document.getElementById('dropdownMenuButton3');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isclick_btnAcreage=!this.isclick_btnAcreage;
    }
  }

  toggleArrowPrice(item: string) {
    const button = document.getElementById('dropdownMenuButton4');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isclick_btnPrice=!this.isclick_btnPrice;
    }
  }

  toggleArrowFilter(item: string) {
    const button = document.getElementById('dropdownMenuButton5');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isclick_btnFilter=!this.isclick_btnFilter;
    }
  }

  updateTypeHome(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedTypeHome = inputElement.value;
  }

  Search_TypeHome(event: Event){
    this.searchTypeHome=this.selectedTypeHome;
    this.click_Search = true;
  }

  Reset_TypeHome(){
    this.searchTypeHome='Tất cả';
  }

  setAllPrice(){
    this.start_price=0;
    this.end_price=50000000;
  }

  setPriceRange(start: number, end: number) {
    this.start_price = start;
    this.end_price = end;
  }

  setAllAcreage(){
    this.start_acreage=0;
    this.end_acreage=150;
  }

  setAcreageRange(start: number, end: number) {
    this.start_acreage = start;
    this.end_acreage = end;
  }

  callPhoneNumber(phoneNumber: string) {
    // Xử lý logic khi người dùng click vào số điện thoại
    // Ví dụ: Mở số điện thoại để gọi (trên điện thoại di động) hoặc chuyển hướng đến một URL
    window.open(`tel:${phoneNumber}`, '_self');
  }

  openZaloMessage(phoneNumber: string) {
    // Xử lý logic khi người dùng click vào nút "Nhắn tin Zalo"
    // Mở ứng dụng Zalo và chuyển hướng đến giao diện nhắn tin với số điện thoại cụ thể
    window.open(`zalo://chat?to=${phoneNumber}`, '_self');
  }

  FilterDate(){
    this.infs = [...this.infs].sort((a, b) => {
      const [dayA, monthA, yearA] = a.time.split('/').map(Number);
      const [dayB, monthB, yearB] = b.time.split('/').map(Number);
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);
      return dateB.getTime() - dateA.getTime();
    });
    console.log(this.infs);
  }

  cities: Location[] = [];
  districts: District[] = [];
  wards: Ward[] = [];
  selectedCity: string = '';
  selectedDistrict: string = '';
  selectedWard: string = '';

  private apiUrl = 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchCities();
  }

  fetchCities(): void {
    this.http.get<Location[]>(this.apiUrl).subscribe(data => {
      this.cities = data;
    });
  }

  onCityChange(event: any): void {
    this.selectedCity = event.target.value;
    this.selectedDistrict = '';
    this.selectedWard = '';
    this.districts = [];

    if (this.selectedCity) {
      const selectedCity = this.cities.find(city => city.Id === this.selectedCity);
      if (selectedCity) {
        this.districts = selectedCity.Districts || [];
      }
    }
  }

  onDistrictChange(event: any): void {
    this.selectedDistrict = event.target.value;
    this.selectedWard = '';
    this.wards = [];

    if (this.selectedDistrict) {
      const selectedCity = this.cities.find(city => city.Id === this.selectedCity);
      if (selectedCity) {
        const selectedDistrict = selectedCity.Districts?.find(district => district.Id === this.selectedDistrict);
        if (selectedDistrict) {
          this.wards = selectedDistrict.Wards || [];
        }
      }
    }
  }

  ResetAddress(){
    this.selectedCity = '';
    this.selectedDistrict = '';
    this.selectedWard = '';
    this.districts=[];
    this.wards=[];

  }
  
}
