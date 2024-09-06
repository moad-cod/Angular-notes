import { Component, input, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Added @Input properties `avatar` and `name` with `required: true` to ensure that these inputs are provided by the parent component.
  @Input({ required : true }) id !: string;
  @Input({ required : true }) avatar !: string;
  @Input({ required : true }) name !: string;
  @Output() select = new EventEmitter();
  //Created a computed property `imagePath` to dynamically generate the path for the user's avatar based on the `avatar` input.
  get imagePath() {  
    return './users/' + this.avatar;
  }
  onSelectUser() {
    this.select.emit(this.id);
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
