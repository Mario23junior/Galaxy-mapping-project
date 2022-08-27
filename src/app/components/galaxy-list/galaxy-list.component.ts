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
  

  displayedObserveColumns = ['nome', 'constelacao', 'dimensoes', 'distancia']
  displayedCaracteColumns = ['raio', 'magnitude', 'massa', 'estrelas']
  displayedCSensorEspecColumns = ['rotacao', 'declinacao', 'IdadeEstimada', 'coordenadas']

  constructor(private galaxiService: GalaxyServiceService) {
     this.galaxias = this.galaxiService.listAll()
  }

  ngOnInit(): void {
  }

}
