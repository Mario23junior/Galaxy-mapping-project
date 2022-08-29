import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable } from 'rxjs';
import { Galaxias } from 'src/app/model/galaxias';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { GalaxyServiceService } from '../service/galaxy-service.service';

@Component({
  selector: 'app-galary-galaxy',
  templateUrl: './galary-galaxy.component.html',
  styleUrls: ['./galary-galaxy.component.css']
})
export class GalaryGalaxyComponent implements OnInit {

  galaxias$: Observable<Galaxias[]>;

  displayedObserveColumns = ['nome']
  
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
  
}
