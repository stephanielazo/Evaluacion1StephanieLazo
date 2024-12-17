import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-triangulo',
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-title>Triángulo</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>Lado 1: <input [(ngModel)]="lado1" type="number" placeholder="Ingresa el lado 1" /></p>
        <p>Lado 2: <input [(ngModel)]="lado2" type="number" placeholder="Ingresa el lado 2" /></p>
        <p>Lado 3: <input [(ngModel)]="lado3" type="number" placeholder="Ingresa el lado 3" /></p>
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
export class TrianguloComponent {
  lado1: number = 0;
  lado2: number = 0;
  lado3: number = 0;
  perimetro: number = 0;
  resultadoCalculado: boolean = false;

  
  calcularPerimetro() {
    
    if (this.lado1 > 0 && this.lado2 > 0 && this.lado3 > 0) {
      this.perimetro = this.lado1 + this.lado2 + this.lado3;
      this.resultadoCalculado = true; 
    } else {
      alert("Por favor, ingresa valores válidos para los lados del triángulo.");
      this.resultadoCalculado = false;
    }
  }
}
