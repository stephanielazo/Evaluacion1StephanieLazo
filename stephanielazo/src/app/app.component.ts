import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <ion-content>
      <router-outlet></router-outlet> 
    </ion-content>
  `,
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class AppComponent {
  constructor() {}
}
