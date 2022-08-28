import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Galaxias } from 'src/app/model/galaxias';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private router:Router

  private galaxias!: Galaxias;


  constructor(router:Router) {
    this.router = router
    this.galaxias = this.galaxias
   }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }

}
