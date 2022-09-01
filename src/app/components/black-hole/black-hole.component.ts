import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable } from 'rxjs';
import { blackHoles } from 'src/app/model/blackHole';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { BlackServiceService } from '../service/black-service.service';


@Component({
  selector: 'app-black-hole',
  templateUrl: './black-hole.component.html',
  styleUrls: ['./black-hole.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 3 }),
        animate(1000, style({ opacity: -500 }))
      ])
    ])
  ]
})

export class BlackHoleComponent implements OnInit {

  blackHoles$: Observable<blackHoles[]>;


  displayedBlacHoleColumns = ['nome']

  constructor(private blackHoleService: BlackServiceService,
    public dialog: MatDialog
  ) {
    this.blackHoles$ = this.blackHoleService.listAll()
      .pipe(
        catchError(error => {
          this.onError('Erro ao acessar serviço de buracos negros,Por favor tente mais uma vez mais')
          return ([])
        })
      )
  }

  onError(erroMesg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMesg
    });
  }
  ngOnInit(): void {
  }

  fontStyleControl = new FormControl('');
  fontStyle?: string;
  
}
