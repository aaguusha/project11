import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';

  noteText!:string;
  noteTitle!:string;
  noteTime!:string;


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setInterval(()=>{
      let date1 = new Date;
      this.noteTime = date1.toLocaleString("ru");
      // console.log(this.noteTime);
    },1000);
  }
  addNote(){
    let noteObj: {id:number, name:string, text:string, time: string};
    noteObj={id:1, name:this.noteTitle, text:this.noteText, time:this.noteTime };
    this.noteArrObj.push(noteObj);
  }
    noteArrObj: {id:number, name:string, text:string, time: string}[]=[];
  deleteNote(n:number){
    this.noteArrObj.splice(n,1);
  }
}

