import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private router:Router

  constructor(router:Router) {
    this.router = router
   }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }

}
