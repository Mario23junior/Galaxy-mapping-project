import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



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

  constructor() { }

  fontStyleControl = new FormControl('https://chandra.si.edu/photo/2022/h1821/h1821_w55.jpg');
  fontStyle?: string;

  ngOnInit(): void {
  }

}
