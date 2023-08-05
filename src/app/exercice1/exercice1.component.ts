import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  public upperCasedFamilyName = '';

  public setUpperCasedFamilyName(eventTarget: EventTarget): void {
    const inputElement = eventTarget as HTMLInputElement;
    const originalFamilyName = inputElement.value;
    this.upperCasedFamilyName = originalFamilyName.toUpperCase();
  }
}
