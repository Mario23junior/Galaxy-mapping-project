import { Component, OnInit } from '@angular/core';
import { Galaxias } from 'src/app/model/galaxias';

@Component({
  selector: 'app-galaxy-list',
  templateUrl: './galaxy-list.component.html',
  styleUrls: ['./galaxy-list.component.css']
})
export class GalaxyListComponent implements OnInit {


  galaxias: Galaxias[] = [
    {
      id: 1, nome: 'Andromeda', constelacao: 'Andromeda',
      declinacao: '+41° 16′ 9″', distancia: '2.537.000',
      desvioVermelho: '−0,001', rotacao: 240.000, massa: 1.222,
      coordenadas: '233mk23', descricao: '2e32mmad,ceekkr', estrelas: 2, IdadeEstimada: 10011010,
      magnitude: 3.81, dimensoes: 232.323, urlImg: 'exemplimg', raio: 110.0
    },
    {
      id: 1, nome: 'Andromeda', constelacao: 'Andromeda',
      declinacao: '+41° 16′ 9″', distancia: '2.537.000',
      desvioVermelho: '−0,001', rotacao: 240.000, massa: 1.222,
      coordenadas: '233mk23', descricao: '2e32mmad,ceekkr', estrelas: 2, IdadeEstimada: 10011010,
      magnitude: 3.81, dimensoes: 232.323, urlImg: 'exemplimg', raio: 110.0
    }, {
      id: 1, nome: 'Andromeda', constelacao: 'Andromeda',
      declinacao: '+41° 16′ 9″', distancia: '2.537.000',
      desvioVermelho: '−0,001', rotacao: 240.000, massa: 1.222,
      coordenadas: '233mk23', descricao: '2e32mmad,ceekkr', estrelas: 2, IdadeEstimada: 10011010,
      magnitude: 3.81, dimensoes: 232.323, urlImg: 'exemplimg', raio: 110.0
    }, {
      id: 1, nome: 'Andromeda', constelacao: 'Andromeda',
      declinacao: '+41° 16′ 9″', distancia: '2.537.000',
      desvioVermelho: '−0,001', rotacao: 240.000, massa: 1.222,
      coordenadas: '233mk23', descricao: '2e32mmad,ceekkr', estrelas: 2, IdadeEstimada: 10011010,
      magnitude: 3.81, dimensoes: 232.323, urlImg: 'exemplimg', raio: 110.0
    }, {
      id: 1, nome: 'Andromeda', constelacao: 'Andromeda',
      declinacao: '+41° 16′ 9″', distancia: '2.537.000',
      desvioVermelho: '−0,001', rotacao: 240.000, massa: 1.222,
      coordenadas: '233mk23', descricao: '2e32mmad,ceekkr', estrelas: 2, IdadeEstimada: 10011010,
      magnitude: 3.81, dimensoes: 232.323, urlImg: 'exemplimg', raio: 110.0
    }
    
  ];

  displayedObserveColumns = ['nome', 'constelacao', 'dimensoes', 'distancia']
  displayedCaracteColumns = ['raio', 'magnitude', 'massa', 'estrelas']
  displayedCSensorEspecColumns = ['rotacao', 'declinacao', 'IdadeEstimada', 'coordenadas']

  constructor() {
  }

  ngOnInit(): void {
  }

}
