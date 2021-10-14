import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {


  users = [
    {login: "bob", role:"admin", lastlogin:new Date('2/1/2018')},
    {login: "lia", role:"user", lastlogin:new Date('2/1/2018')},
    {login: "john", role:"admin", lastlogin:new Date('4/14/2019')},
    {login: "robin", role:"user", lastlogin:new Date('2/16/2020')},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
