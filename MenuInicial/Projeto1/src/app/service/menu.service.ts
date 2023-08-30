import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
   menuAberto:boolean=false;

  constructor() {}

  isMenuAberto(): boolean {
    return this.menuAberto;
  }

  alternarMenu(): void {
    this.menuAberto = !this.menuAberto;
  }
}