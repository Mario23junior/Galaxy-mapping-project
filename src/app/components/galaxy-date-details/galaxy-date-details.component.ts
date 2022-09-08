import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Galaxias } from 'src/app/model/galaxias';

@Component({
  selector: 'app-galaxy-date-details',
  templateUrl: './galaxy-date-details.component.html',
  styleUrls: ['./galaxy-date-details.component.css']
})
export class GalaxyDateDetailsComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<Galaxias>,
    @Inject(MAT_DIALOG_DATA) public galaxias:Galaxias
    ) { }

  ngOnInit(): void {
  }
 

  fechar () {
    this.dialogRef.close()
  }

  

}
