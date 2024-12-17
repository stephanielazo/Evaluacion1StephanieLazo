import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-circulo',
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-title>Círculo</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>Radio: <input [(ngModel)]="radio" type="number" placeholder="Ingrese el radio" /></p>
        <ion-button expand="full" (click)="calcularPerimetro()">Calcular Perímetro</ion-button>

        
        <div *ngIf="resultadoCalculado">
          <p>Perímetro: {{ perimetro }} unidades</p>
        </div>
      </ion-card-content>
    </ion-card>
  `,
  standalone: true,
  imports: [FormsModule, IonicModule, CommonModule], 
})
export class CirculoComponent {
  radio: number = 0;
  perimetro: number = 0;
  resultadoCalculado: boolean = false;

  calcularPerimetro() {
    
    this.perimetro = 2 * Math.PI * this.radio;
    this.resultadoCalculado = true; 
  }
}
