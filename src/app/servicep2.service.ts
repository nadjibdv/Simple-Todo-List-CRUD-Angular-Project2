import { Injectable } from '@angular/core';
import { Taskp2 } from './models/taskp2';

@Injectable({
  providedIn: 'root'
})
export class Servicep2Service {

  constructor() { }

  public taskss:Taskp2[]=[ new Taskp2(0 , "TITLE 00000", "NOTE 0000")];


  public addTask(item:Taskp2){
       this.taskss.push(item);

       console.warn(this.taskss);
  }



  public getTask(id:number):Taskp2{
    const index = this.taskss.findIndex(x => x.id == id);
    return this.taskss[index];   
  }




  public editTask(id:number, item:Taskp2){
    const index = this.taskss.findIndex(x => x.id == id);
    if (index > -1){
      this.taskss[index] = item;
      console.warn(this.taskss);
    }
  }



  public removeTask(id:number){
    const index = this.taskss.findIndex(x => x.id == id);
    if (index > -1){
      this.taskss.splice(index,1);
      console.warn(this.taskss);
    }
  }



}
