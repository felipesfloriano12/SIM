import { Component, OnInit } from '@angular/core';
import { TEMPERATURAS } from '../data/temperatura.data';
import { Temperatura } from '../model/temperatura.model';
import { TemperaturaService } from '../service/temperatura.service';

@Component({
  selector: 'app-temperatura-list',
  templateUrl: './temperatura-list.component.html',
  styleUrls: ['./temperatura-list.component.css'],
  providers: [TemperaturaService]
})
export class TemperaturaListComponent implements OnInit {

  temperaturas: Temperatura[] = [];

  constructor(private temperaturaService: TemperaturaService) { }

  ngOnInit(): void {
    this.temperaturas = TEMPERATURAS;
  }

}
