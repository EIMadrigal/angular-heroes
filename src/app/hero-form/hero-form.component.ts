import { Component } from '@angular/core';
import { Hero } from '../hero-form';

@Component({
  selector: 'app-hero-form',
  standalone: false,
  //imports: [],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  
  onSubmit() {
    this.submitted = true;
    const myHero = new Hero(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');
    console.log('My hero is called ' + myHero.name);
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
