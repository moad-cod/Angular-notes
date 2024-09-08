import { Component, input, Input, Output, EventEmitter, output} from '@angular/core';

// type User = {
//   id : string;
//   name : string;
//   avatar : string;
// }

import { type User } from "./user.model";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter<string>();




  // @Input({required:true}) user!: {
  //   id : string;
  //   name : string;
  //   avatar : string;
  // };



  // Added @Input properties `avatar` and `name` with `required: true` to ensure that these inputs are provided by the parent component.
  // @Input({ required : true }) id !: string;
  // @Input({ required : true }) avatar !: string;
  // @Input({ required : true }) name !: string;
  
  // Traditional @Output() with EventEmitter():
  // @Output() select = new EventEmitter<string>();
  
  // output<string>() with Signals API (New Approach):
  // select = output<string>();

  //Created a computed property `imagePath` to dynamically generate the path for the user's avatar based on the `avatar` input.
  get imagePath() {  
    return './users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
  
  
  
  
  
  //custom Events!


  //Describes the addition of the @Input properties (avatar and name).

  // avatar = input.required<string>();
  // name = input.required<string>();
  // Mentions the computed imagePath property.
  // imagePath = computed( () =>{
  //   return './users/' + this.avatar();
  // });
}
