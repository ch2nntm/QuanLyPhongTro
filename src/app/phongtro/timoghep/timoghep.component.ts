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
  selector: 'app-timoghep',
  templateUrl: './timoghep.component.html',
  styleUrl: './timoghep.component.css'
})
export class TimoghepComponent {
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

  infs: Post[] = [];

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

  SearchTypeHome(event: Event): void {
    this.searchTypeHome = this.selectedTypeHome;
    const requestBody = { typehome: this.searchTypeHome };
    
    if (this.searchTypeHome === "Tất cả") {
      this.listPosts();
    } else {
      this.postService.ListPost(requestBody).subscribe(
        (response: Post[]) => {
          console.log('Response:', response);
          
          // Lọc các bài viết theo loại nhà được chọn
          this.infs = response.filter(item => item.category.name === this.searchTypeHome);

          // Lọc các bài viết theo danh mục
          this.infs = this.infs.filter(item => item.category.name === 'Tìm người ở chung');
        },
        error => {
          console.error('Error:', error);
        }
      );
    }
  }

  Reset_TypeHome(){
    this.searchTypeHome='Tất cả';
  }

  setAllPrice(){
    this.start_price=0;
    this.end_price=50000000;
    this.SearchPrice(this.start_price, this.end_price);
  }

  setPriceRange(start: number, end: number) {
    this.start_price = start;
    this.end_price = end;
    this.SearchPrice(this.start_price, this.end_price);
  }

  setAllAcreage(){
    this.start_acreage=0;
    this.end_acreage=150;
    this.searchAcreage(this.start_acreage, this.end_acreage);
  }

  setAcreageRange(start: number, end: number) {
    this.start_acreage = start;
    this.end_acreage = end;
    this.searchAcreage(this.start_acreage, this.end_acreage);
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


  cities: Location[] = [];
  districts: District[] = [];
  wards: Ward[] = [];
  selectedCity: string = '';
  selectedDistrict: string = '';
  selectedWard: string = '';

  private apiUrl = 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json';

  constructor(private http: HttpClient, private postService: PostsService) {
    this.listPosts();
   }

  listPosts(): void {
    const requestBody = { key: 'value' }; 
    this.postService.ListPost(requestBody).subscribe(
      response => {
        console.log('Response:', response);
        this.infs=response;
        const filteredItems = this.infs.filter(item => item.category.name === 'Tìm người ở chung');
        this.infs=filteredItems;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  getFullAddress(address: any): string {
    const { province, district, ward, detail } = address;
    return `${district} - ${province}`;
  }

  ngOnInit(): void {
    this.fetchCities();
    this.listPosts();
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

  SearchPrice(start: number, end: number): void {
    // Tạo requestBody với khoảng giá
    const requestBody = { startPrice: start, endPrice: end };
  
    this.postService.ListPost(requestBody).subscribe(
      (response: Post[]) => { // Chỉ định kiểu dữ liệu cho response
        console.log('Response:', response);
        
        // Lọc các bài viết theo khoảng giá
        this.infs = response.filter(item => item.price >= start && item.price <= end);
  
        // Nếu cần lọc theo danh mục
        this.infs = this.infs.filter(item => item.category.name === 'Tìm người ở chung');
  
        // Bạn có thể xử lý thêm dữ liệu ở đây nếu cần
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  searchAcreage(start: number, end: number): void {
    // Tạo requestBody với khoảng giá
    const requestBody = { startAcreage: start, endAcreage: end };
  
    this.postService.ListPost(requestBody).subscribe(
      (response: Post[]) => { // Chỉ định kiểu dữ liệu cho response
        console.log('Response:', response);
        
        // Lọc các bài viết theo khoảng giá
        this.infs = response.filter(item => item.acreage >= start && item.acreage <= end);
  
        // Nếu cần lọc theo danh mục
        this.infs = this.infs.filter(item => item.category.name === 'Tìm người ở chung');
  
        // Bạn có thể xử lý thêm dữ liệu ở đây nếu cần
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  
}
