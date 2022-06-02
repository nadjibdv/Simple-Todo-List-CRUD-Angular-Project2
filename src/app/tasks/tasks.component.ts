import { Component, OnInit } from '@angular/core';
import { Servicep2Service } from '../servicep2.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public myservice:Servicep2Service) {

   }

  ngOnInit(): void {
  }

}
