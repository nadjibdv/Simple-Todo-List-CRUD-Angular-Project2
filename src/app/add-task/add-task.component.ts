import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Servicep2Service } from '../servicep2.service';
import {Router} from '@angular/router';
import { Taskp2 } from '../models/taskp2';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(public myservice:Servicep2Service, public router:Router ) { }

  title = new FormControl();
  note = new FormControl();



  public creatTask(){
    this.myservice.addTask(new Taskp2(this.myservice.taskss.length, this.title.value , this.note.value))
    this.router.navigate(['tasks']);
  }

  ngOnInit(): void {
  }

}
