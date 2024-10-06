import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {
  array = new Array(7);
}
