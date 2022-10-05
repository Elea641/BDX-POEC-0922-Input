import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer-component',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.css']
})
export class DeveloperComponentComponent {

    myDeveloper: Developer = new Developer ('Elea','Voliotis',32, 'femme', 'Poec Java',
      [
        new Skill ("Angular", "ANGULAR", "www.angular.com")
      ])
}
