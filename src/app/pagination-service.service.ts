import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationServiceService {
  private items: any[] = [];
  private itemsPerPage: number = 10;
  private currentPage: number = 1;

  setItems(items: any[]) {
    this.items = items;
  }

  getPaginatedItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.items.slice(startIndex, startIndex + this.itemsPerPage);
  }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  setItemsPerPage(itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage;
  }

  getItemsPerPage(): number {
    return this.itemsPerPage;
  }

  getTotalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  constructor() { }
}
