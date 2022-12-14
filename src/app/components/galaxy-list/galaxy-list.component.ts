import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable } from 'rxjs';
import { Galaxias } from 'src/app/model/galaxias';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { GalaxyServiceService } from '../service/galaxy-service.service';
import { GalaxyDateDetailsComponent } from '../galaxy-date-details/galaxy-date-details.component'

 @Component({
  selector: 'app-galaxy-list',
  templateUrl: './galaxy-list.component.html',
  styleUrls: ['./galaxy-list.component.css']
})
export class GalaxyListComponent implements OnInit {

  galaxias$: Observable<Galaxias[]>;
   
  displayedObserveColumns = ['nome', 'constelacao', 'dimensoes', 'distancia']
  displayedCaracteColumns = ['raio', 'magnitude', 'massa', 'estrelas']
  displayedCSensorEspecColumns = ['rotacao', 'declinacao', 'IdadeEstimada', 'coordenadas']
 
  constructor(private galaxiService: GalaxyServiceService,
    public dialog: MatDialog
    ) {
      this.galaxias$ = this.galaxiService.listAll()
      .pipe(
        catchError(error => {
          this.onError('Não foi possivel encontrar galaxias, por favor volte mais tarde')
          return ([])
        })
      )
  }

   onError(erroMesg: string){
       this.dialog.open(ErrorDialogComponent, {
        data: erroMesg
      });
  }

  ngOnInit(): void {
  }

  ViewDetails(galaxias:Galaxias) {
     this.dialog.open(GalaxyDateDetailsComponent,{
       width:'700px',
       height:'650px',
       data:galaxias
     })
  }

}
