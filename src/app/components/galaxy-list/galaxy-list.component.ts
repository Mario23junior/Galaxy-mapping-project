import { Component, OnInit } from '@angular/core';
import { Galaxias } from 'src/app/model/galaxias';
import { GalaxyServiceService } from '../service/galaxy-service.service';

@Component({
  selector: 'app-galaxy-list',
  templateUrl: './galaxy-list.component.html',
  styleUrls: ['./galaxy-list.component.css']
})
export class GalaxyListComponent implements OnInit {

  galaxias: Galaxias[] = []
  galaxiService: GalaxyServiceService

  displayedObserveColumns = ['nome', 'constelacao', 'dimensoes', 'distancia']
  displayedCaracteColumns = ['raio', 'magnitude', 'massa', 'estrelas']
  displayedCSensorEspecColumns = ['rotacao', 'declinacao', 'IdadeEstimada', 'coordenadas']

  constructor() {
    this.galaxiService = new GalaxyServiceService(); 
    this.galaxias = this.galaxiService.listAll()
  }

  ngOnInit(): void {
  }

}
