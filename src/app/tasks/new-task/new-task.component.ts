import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  // directives & Two-Way-Binding 
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

 
 

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    
  }
  // signals & Two-Way-Binding 
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
}
