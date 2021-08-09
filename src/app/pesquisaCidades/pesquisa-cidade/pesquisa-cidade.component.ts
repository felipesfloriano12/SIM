import { Component, OnInit } from '@angular/core';
import { Temperatura } from 'src/app/temperaturas/model/temperatura.model';
import { TemperaturaService } from 'src/app/temperaturas/service/temperatura.service';

@Component({
  selector: 'app-pesquisa-cidade',
  templateUrl: './pesquisa-cidade.component.html',
  styleUrls: ['./pesquisa-cidade.component.css'],
  providers: [TemperaturaService]
})
export class PesquisaCidadeComponent implements OnInit {

cidade:String = '';

constructor(private temperaturaService: TemperaturaService) { }

   ngOnInit(): void {
}

onSubmit():void{
   this.temperaturaService.procuraTemperatura(this.cidade)
     .subscribe(
        temp => {
           const temperatura = new Temperatura(temp.coord.lat,temp.coord.lon,temp.name,temp.weather[0].description,temp.main.temp) ;
           console.log(temperatura);
           this.temperaturaService.addTemperatura(temperatura);
        },
        error =>{

        }
   );
}

}
