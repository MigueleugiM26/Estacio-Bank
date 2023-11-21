import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { IonicSlides } from '@ionic/angular';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
  
})
export class MenuPrincipalPage {
  constructor(private router: Router) {}

  swiperModules = [IonicSlides];

  navigateToLogin() {
    this.router.navigate(['login']);
  }  

  navigateToSecret () {
    this.router.navigate(['menu-principal-escondido']);
  }

  navigateToPerguntasFrequentes () {
    this.router.navigate(['perguntas-frequentes']);
  }

  navigateToAreaPix () {
    this.router.navigate(['area-pix']);
  }

  navigateToTansferir () {
    this.router.navigate(['transferir']);
  }

  navigateToCobrar () {
    this.router.navigate(['cobrar']);
  }

  navigateToDepositar () {
    this.router.navigate(['depositar']);
  }

  navigateToInvestir () {
    this.router.navigate(['investir']);
  }

  navigateToPagar () {
    this.router.navigate(['pagar']);
  }

  navigateToHistorico () {
    this.router.navigate(['historico']);
  }
}

new Swiper("#swiper-1", {
  effect: "fade",
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,  
  }
});