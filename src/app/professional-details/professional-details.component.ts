import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.scss']
})
export class ProfessionalDetailsComponent implements OnInit {

  navContent="CITI";
  constructor() { }

  ngOnInit(): void {
  }

  showContent(type: string){
    this.navContent = type;
  }
}
