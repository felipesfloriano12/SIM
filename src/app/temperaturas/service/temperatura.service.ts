import { Observable } from "rxjs";
import { Temperatura } from "../model/temperatura.model";
import { HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { TEMPERATURAS } from "../data/temperatura.data";

@Injectable()
export class TemperaturaService{

    url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    url2 = 'https://api.openweathermap.org/data/2.5/onecall?lat='
    PK = 'APPID=1561ff9c9b4f6617a33252fb83549c2a';

    constructor(private http: HttpClient){}

    getTemperaturas(){
        return TEMPERATURAS;
    }

    addTemperatura(temperatura: Temperatura){
        TEMPERATURAS.push(temperatura);
    }

    procuraTemperatura(nomeCidade: String): Observable<any>{
       return this.http.get( this.url + nomeCidade + 
       '&lang=pt_br&'+ this.PK +'&units=metric');
    }

    procuraProximoDias(lat: String, lon: String): Observable<any>{
        return this.http.get(this.url2 + lat + '&lon=' + lon + '&' + this.PK);
    }

}