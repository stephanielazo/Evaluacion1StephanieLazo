import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { IonicModule, AlertController } from '@ionic/angular'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  selectedFigura: string = ''; 
  radio: number = 0; 
  ladoA: number = 0; 
  ladoB: number = 0; 
  ladoC: number = 0; 
  resultado: number | null = null; 

  constructor(private alertController: AlertController) {}

  
  async openFiguraOptions() {
    const alert = await this.alertController.create({
      header: 'Figura Geométrica',
      inputs: [
        {
          name: 'circulo',
          type: 'radio',
          label: 'Círculo',
          value: 'circulo',
          checked: this.selectedFigura === 'circulo',
        },
        {
          name: 'triangulo',
          type: 'radio',
          label: 'Triángulo',
          value: 'triangulo',
          checked: this.selectedFigura === 'triangulo',
        },
      ],
      buttons: [
        { text: 'CANCEL', role: 'cancel' },
        {
          text: 'OK',
          handler: (data) => {
            this.selectedFigura = data;
            this.resultado = null; 
          },
        },
      ],
    });

    await alert.present();
  }

  
  calcularPerimetro() {
    if (this.selectedFigura === 'circulo' && this.radio > 0) {
      this.resultado = 2 * Math.PI * this.radio;
    } else if (
      this.selectedFigura === 'triangulo' &&
      this.ladoA > 0 &&
      this.ladoB > 0 &&
      this.ladoC > 0
    ) {
      this.resultado = this.ladoA + this.ladoB + this.ladoC;
    } else {
      this.resultado = null;
      alert('Por favor, ingrese valores válidos.');
    }
  }
}
