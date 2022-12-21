import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Demo } from '../demo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../app.component.css']
})
export class HomeComponent implements OnInit {
  demoData!: Demo[]

  constructor(
    private appService :AppService
    ) {}

  ngOnInit(): void {
    this.appService.getDemo().subscribe((data) => {
      this.demoData = data
    })
  }

}
