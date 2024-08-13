import { Component, OnInit } from '@angular/core';
import { max } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post/post';
import { PostsService } from '../../services/post/posts.service';

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
  selector: 'app-rent-room',
  templateUrl: './rent-room.component.html',
  styleUrl: './rent-room.component.css'
})
export class RentRoomComponent {

  infs: Post[] = [];
  startPrice=0;
  endPrice=50000000;
  startAcreage=0;
  endAcreage=150;
  selectedTypeHome: string = '';
  searchTypeHome: string='Tất cả';
  isClickSearch: boolean=false;
  isClickBtnKind: boolean=false;
  isClickBtnAddress: boolean=false;
  isClickBtnAcreage: boolean=false;
  isClickBtnPrice: boolean=false;
  isClickBtnFilter: boolean=false;
  activeItem: string | null = null;

  private apiUrl = 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json';

  constructor(private http: HttpClient, private postService: PostsService) {
    this.ListPosts();
   }

  ngOnInit(): void {
    this.FetchCities();
    this.ListPosts();
  }

  ToggleArrowKind(item: string) {
    const button = document.getElementById('dropdownMenuButton1');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isClickBtnKind=!this.isClickBtnKind;
    }
  }

  ToggleArrowAddress(item: string) {
    const button = document.getElementById('dropdownMenuButton2');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isClickBtnAddress=!this.isClickBtnAddress;
    }
  }

  ToggleArrowAcreage(item: string) {
    const button = document.getElementById('dropdownMenuButton3');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isClickBtnAcreage=!this.isClickBtnAcreage;
    }
  }

  ToggleArrowPrice(item: string) {
    const button = document.getElementById('dropdownMenuButton4');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isClickBtnPrice=!this.isClickBtnPrice;
    }
  }

  ToggleArrowFilter(item: string) {
    const button = document.getElementById('dropdownMenuButton5');
    this.activeItem = this.activeItem === item ? null : item;
    if (button) {
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      this.isClickBtnFilter=!this.isClickBtnFilter;
    }
  }

  UpdateTypeHome(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedTypeHome = inputElement.value;
  }

  SearchTypeHome(event: Event){
    this.searchTypeHome=this.selectedTypeHome;
    this.isClickSearch = true;
  }

  ResetTypeHome(){
    this.searchTypeHome='Tất cả';
  }

  SetAllPrice(){
    this.startPrice=0;
    this.endPrice=50000000;
  }

  SetPriceRange(start: number, end: number) {
    this.startPrice = start;
    this.endPrice = end;
  }

  SetAllAcreage(){
    this.startAcreage=0;
    this.endAcreage=150;
  }

  SetAcreageRange(start: number, end: number) {
    this.startAcreage = start;
    this.endAcreage = end;
  }

  CallPhoneNumber(phoneNumber: string) {
    // Xử lý logic khi người dùng click vào số điện thoại
    // Ví dụ: Mở số điện thoại để gọi (trên điện thoại di động) hoặc chuyển hướng đến một URL
    window.open(`tel:${phoneNumber}`, '_self');
  }

  OpenZaloMessage(phoneNumber: string) {
    // Xử lý logic khi người dùng click vào nút "Nhắn tin Zalo"
    // Mở ứng dụng Zalo và chuyển hướng đến giao diện nhắn tin với số điện thoại cụ thể
    window.open(`zalo://chat?to=${phoneNumber}`, '_self');
  }


  cities: Location[] = [];
  districts: District[] = [];
  wards: Ward[] = [];
  selectedCity: string = '';
  selectedDistrict: string = '';
  selectedWard: string = '';

  ListPosts(): void {
    const requestBody = { key: 'value' }; 
    this.postService.ListPost(requestBody).subscribe(
      response => {
        console.log('Response:', response);
        this.infs=response;
        const filteredItems = this.infs.filter(item => item.category.name !== 'Tìm người ở chung');
        this.infs=filteredItems;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  GetFullAddress(address: any): string {
    const { province, district, ward, detail } = address;
    return `${district} - ${province}`;
  }

  FetchCities(): void {
    this.http.get<Location[]>(this.apiUrl).subscribe(data => {
      this.cities = data;
    });
  }

  OnCityChange(event: any): void {
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

  OnDistrictChange(event: any): void {
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

  SearchPrice(start: number, end: number): void {
    // Tạo requestBody với khoảng giá
    const requestBody = { startPrice: start, endPrice: end };
  
    this.postService.ListPost(requestBody).subscribe(
      (response: Post[]) => { // Chỉ định kiểu dữ liệu cho response
        console.log('Response:', response);
        
        // Lọc các bài viết theo khoảng giá
        this.infs = response.filter(item => item.price >= start && item.price <= end);
  
        // Nếu cần lọc theo danh mục
        this.infs = this.infs.filter(item => item.category.name !== 'Tìm người ở chung');
  
        // Bạn có thể xử lý thêm dữ liệu ở đây nếu cần
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  
}
