import { Component, OnInit } from '@angular/core';
import { map, max } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../../models/post/post';
import { PostsService } from '../../services/post/posts.service';
import { Router } from '@angular/router';

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
  selector: 'app-roommate-search',
  templateUrl: './roommate-search.component.html',
  styleUrl: './roommate-search.component.css'
})
export class RoommateSearchComponent {
  
  infs: Post[] = [];
  startPrice=0;
  endPrice=50000000;
  startAcreage=0;
  endAcreage=150;
  selectedCategory: string = '';
  searchCategory: string='Tất cả';
  isClickSearch: boolean=false;
  isClickBtnKind: boolean=false;
  isClickBtnAddress: boolean=false;
  isClickBtnAcreage: boolean=false;
  isClickBtnPrice: boolean=false;
  isClickBtnFilter: boolean=false;
  activeItem: string | null = null;

  private apiUrl = 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json';

  constructor(private http: HttpClient, private postService: PostsService, private router: Router) {
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
    this.selectedCategory = inputElement.value;
  }

  SearchCategory(event: Event){
    this.searchCategory=this.selectedCategory;
    this.isClickSearch = true;
  }

  ResetTypeHome(){
    this.searchCategory='Tất cả';
  }

  SetAllPrice(){
    this.startPrice=0;
    this.endPrice=50000000;
    // this.SearchPrice(this.startPrice, this.endPrice);
  }

  SetPriceRange(start: number, end: number) {
    this.startPrice = start;
    this.endPrice = end;
    // this.SearchPrice(this.startPrice, this.endPrice);
  }

  SetAllAcreage(){
    this.startAcreage=0;
    this.endAcreage=150;
    // this.SearchAcreage(this.startAcreage, this.endAcreage);
  }

  SetAcreageRange(start: number, end: number) {
    this.startAcreage = start;
    this.endAcreage = end;
    // this.SearchAcreage(this.startAcreage, this.endAcreage);
  }


  CallPhoneNumber(phoneNumber: string) {
    window.open(`tel:${phoneNumber}`, '_self');
  }

  OpenZaloMessage(phoneNumber: string) {
    window.open(`zalo://chat?to=${phoneNumber}`, '_self');
  }


  cities: Location[] = [];
  districts: District[] = [];
  wards: Ward[] = [];
  selectedCity: string = '';
  selectedDistrict: string = '';
  selectedWard: string = '';

  ListPosts(): void {
    let params = new HttpParams();
      params = params.set('CategoryName','chung');
    const queryParams = params.toString();
    this.postService.Call_API_Search_Post(queryParams).subscribe(
      (response: any) => { 
        this.infs = response;
        console.log("Params: ",queryParams);
        console.log("All Response: ",response);
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

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`;
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
    console.log("City: ",this.selectedCity);
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

  searchParams = {
    region: '', 
    priceFrom: 0,
    priceTo: 0,
    address:''
  };

  cityNameMap: { [id: number]: string } = {};
  SearchAll(){
    // this.searchParams.priceFrom=this.startPrice;
    // this.searchParams.priceTo=this.endPrice;
    let params = new HttpParams();
    if (this.startPrice != 0) {
        params = params.set('from', this.startPrice.toString());
    }
    else{
        params = params.set('from','0');
    }
    if (this.endPrice != 0) {
        params = params.set('to', this.endPrice.toString());
    }
    if (this.selectedCity != '') {
      params = params.set('Address', this.searchParams.region.toString());
    }
      params = params.set('CategoryName','chung');
    if(this.selectedCity!=''){
    }
    const queryParams = params.toString();
    this.postService.Call_API_Search_Post(queryParams).subscribe(
      (response: any) => { 
        this.infs = response;
        console.log("Params: ",queryParams);
        console.log("All Response: ",response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  NavigateToDetail(itemId: any): void {
    this.router.navigate(['/detailroommate', itemId]);
  }
    
}
