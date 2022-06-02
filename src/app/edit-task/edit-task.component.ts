import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Servicep2Service } from '../servicep2.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Taskp2 } from '../models/taskp2';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  id:number;
  taskk : Taskp2;
  title = new FormControl();
  note = new FormControl();

  

  public updateTask(){

        this.taskk.title = this.title.value;
        this.taskk.note = this.note.value;

        this.myservice.editTask(this.id,this.taskk);
        
        this.router.navigate(['tasks']);
        
  }


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
