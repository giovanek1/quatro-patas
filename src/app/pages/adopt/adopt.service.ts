import { Injectable } from '@angular/core';
import { AdoptionCard, AdoptionModal } from './adopt.component.type';

@Injectable({
  providedIn: 'root'
})
export class AdoptService {
  private _adoptionModals: AdoptionModal[] = [
    {
      srcImg: './../../../assets/img/fav-dog.png',
      srcAlt: 'Homem com seu cachorro',
      bgClass: 'bg-color-pink',
      title: 'FAVORITADO COM AMOR!',
      description: 'Obrigado por seu interesse em nossos amigos! Esperamos ansiosos pela sua adoção!'
    },
    {
      srcImg: './../../../assets/img/adopt-dog.png',
      srcAlt: 'Mulher com seu cachorro no colo',
      bgClass: 'bg-color-green',
      title: 'Você ganhou um novo amiguinho!',
      description: 'Obrigado por sua adoção, ficamos felizes por você e por ele!'
    }
  ]

  private _adoptionCards: AdoptionCard[] = [
    {
      srcImg: './../../../assets/img/luigy-gonzales.jpeg',
      title: 'Luigy Gonzales',
      description: 'Buldogue, macho',
      isFav: true,
      adopted: false,
    },
    {
      srcImg: './../../../assets/img/shakira-lopez.jpeg',
      title: 'Shakira Lopez',
      description: 'Amarelo, fêmea',
      isFav: false,
      adopted: false,
    },
    {
      srcImg: './../../../assets/img/nico-di-angelo.jpeg',
      title: 'Nico Di Angelo',
      description: 'Frajola, macho',
      isFav: false,
      adopted: false,
    },
    {
      srcImg: './../../../assets/img/bartholomeu-II.jpeg',
      title: 'Bartolomeu II',
      description: 'Vira-lata, macho',
      isFav: false,
      adopted: false,
    },
    {
      srcImg: './../../../assets/img/marieta-soares.jpeg',
      title: 'Marieta Soares',
      description: 'Golden, femêa',
      isFav: true,
      adopted: false,
    },
    {
      srcImg: './../../../assets/img/pity-caramelo.jpeg',
      title: 'Pity Caramelo',
      description: 'Vira-lata, fêmea',
      isFav: true,
      adopted: false,
    },
    {
      srcImg: './../../../assets/img/perseu-baptist.jpeg',
      title: 'Perseu Baptist',
      description: 'Rajado, macho',
      isFav: true,
      adopted: false,
    },
    {
      srcImg: './../../../assets/img/theodora-blanc.jpeg',
      title: 'Theodora Blanc',
      description: 'Albino, fêmea',
      isFav: true,
      adopted: false,
    },
    {
      srcImg: './../../../assets/img/rosinha-mali.jpeg',
      title: 'Rosinha Mali',
      description: 'Escaminha, fêmea',
      isFav: false,
      adopted: false,
    },
  ]

  get adoptionModals(): AdoptionModal[] {
    return this._adoptionModals;
  }

  get adoptionCards(): AdoptionCard[] {
    return this._adoptionCards;
  }

  set adoptionCards(adoptCards: AdoptionCard[]) {
    this._adoptionCards = adoptCards;
  }
}
