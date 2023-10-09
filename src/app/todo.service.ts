import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _snackbarservice:SnackbarService) { }

  todoArray:Array<string>=[
    "ANGULAR"
  ]
  getreturnArray(){
    return this.todoArray
  }


  getaddarray(todo:string){
this.todoArray.push(todo)
this._snackbarservice.openSnackBar("added for succefully")
  }
}
