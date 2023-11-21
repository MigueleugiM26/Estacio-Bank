import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-pix',
  templateUrl: './area-pix.page.html',
  styleUrls: ['./area-pix.page.scss'],
})

export class AreaPixPage {
  constructor(private router: Router) {}

  navigateToMenuPrincipal() {
    this.router.navigate(['menu-principal']);
  }  
}
