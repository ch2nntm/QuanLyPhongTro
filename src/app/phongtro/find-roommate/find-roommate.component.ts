import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

interface Ward {
  Id: string;
  Name: string;
}

interface District {
  Id: string;
  Name: string;
  Wards: Ward[];
}

interface City {
  Id: string;
  Name: string;
  Districts: District[];
}

@Component({
  selector: 'app-find-roommate',
  templateUrl: './find-roommate.component.html',
  styleUrl: './find-roommate.component.css'
})
export class FindRoommateComponent implements OnInit{
  isForRent: boolean = false;

  toggleForRent() {
    this.isForRent = true;
}
  cities: City[] = [];
    districts: District[] = [];
    wards: Ward[] = [];

    selectedCityId: string = '';
    selectedDistrictId: string = '';
    selectedWardId: string = '';

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.http
        .get<City[]>('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
        .subscribe((data) => {
          this.cities = data;
        });
    }

    onCityChange() {
      this.districts = [];
      this.wards = [];
      const selectedCity = this.cities.find(city => city.Id === this.selectedCityId);
      if (selectedCity) {
        this.districts = selectedCity.Districts;
      }
    }

    onDistrictChange() {
      this.wards = [];
      const selectedCity = this.cities.find(city => city.Id === this.selectedCityId);
      if (selectedCity) {
        const selectedDistrict = selectedCity.Districts.find(district => district.Id === this.selectedDistrictId);
        if (selectedDistrict) {
          this.wards = selectedDistrict.Wards;
        }
      }
    }
}