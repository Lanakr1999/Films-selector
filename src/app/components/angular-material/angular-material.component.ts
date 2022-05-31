import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.scss']
})
export class AngularMaterialComponent implements OnInit {

  inputValue: string = '';
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onValueChange(event: any) {
    this.inputValue = event.target.value;
  }

}
