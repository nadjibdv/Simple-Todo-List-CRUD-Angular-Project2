import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Taskp2 } from '../models/taskp2';
import { Servicep2Service } from '../servicep2.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  id:number;
  taskk : Taskp2;
  title = new FormControl();
  note = new FormControl();


  
  constructor(public myservice:Servicep2Service,public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      parms => {
         this.id = Number(parms.get('id'));
         this.taskk = this.myservice.getTask(this.id);
         this.title.setValue(this.taskk.title);
         this.note.setValue(this.taskk.note);
      }


 )

  }

}
