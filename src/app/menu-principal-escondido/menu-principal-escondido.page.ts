import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { IonicSlides } from '@ionic/angular';


@Component({
  selector: 'app-menu-principal-escondido',
  templateUrl: './menu-principal-escondido.page.html',
  styleUrls: ['./menu-principal-escondido.page.scss'],
  
})
export class MenuPrincipalEscondidoPage {
  constructor(private router: Router) {}

  swiperModules = [IonicSlides];

  navigateToLogin() {
    this.router.navigate(['login']);
  }  

  navigateToView () {
    this.router.navigate(['menu-principal']);
  }

  navigateToPerguntasFrequentes () {
    this.router.navigate(['perguntas-frequentes']);
  }

  navigateToFuncionalidadesEscondidas () {
    this.router.navigate(['funcionalidades-escondidas']);
  }

  navigateToHistoricoEscondido () {
    this.router.navigate(['historico-escondido']);
  }
}

new Swiper("#swiper-1", {
  effect: "fade",
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,  
  }
});