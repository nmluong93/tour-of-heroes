import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { HEROES } from '../data/mock-heroes';
import { Hero } from '../dto/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'John'
  }

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);// asynchronous way to make UI not freeze when the HTTP request delays.
  }

  // onSelect(hero: Hero) {
  //   this.messageService.addMessage('Select hero :' + hero.name + ' with id : ' + hero.id);
  //   this.selectedHero = hero;
  // }

}
