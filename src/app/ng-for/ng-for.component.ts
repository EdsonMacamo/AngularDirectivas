import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {


  names = [
    "Edson",
    "Nivaldo",
    "Fahim",
    "Elton"
  ];

  cities = [
    {name:"Sao paulo", state:"SP"},
    {name:"Porto Alegre", state:"RS"},
    {name:"Curitiba", state:"PR"},
    {name:"Rio de Janeiro", state:"RJ"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
