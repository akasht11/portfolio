import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  myName: string;
  phoneNumber: number;
  email: string;
  address: string;
  college: string;
  hobbies: string;
  collegeHtml="<College>";
  emailHtml="<Email>";
  phoneHtml="<Phone>";
  hobbiesHtml="<Hobbies>";

  constructor() { }

  ngOnInit(): void {
    this.myName = "Akash Takawale";
    this.phoneNumber = 9623833387;
    this.email = "akash.takawale11@gmail.com";
    this.college = "Dr. D.Y.Patil Institute of Engineering Management and Research";
    this.address = "Gadiya Estate, Nandanvan Society, Kothrud, Pune - 411038";
    this.hobbies = "Trekking, Badminton, Listening Music";
  }
}
