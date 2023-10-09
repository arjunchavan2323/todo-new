import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todocard',
  templateUrl: './todocard.component.html',
  styleUrls: ['./todocard.component.scss']
})
export class TodocardComponent implements OnInit {
todoArray:Array<string>=[]
  constructor(private _todoservice:TodoService) { }

  ngOnInit(): void {
    this.todoArray=this._todoservice.getreturnArray()
  }

 

}
