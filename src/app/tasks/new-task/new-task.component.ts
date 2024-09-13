import { Component, EventEmitter, inject, Output, Input, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Title } from '@angular/platform-browser';
// import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!:string;
  @Output() close = new EventEmitter<void>();

  // Submitted Data
  // @Output() add = new EventEmitter<NewTaskData>();
  // directives & Two-Way-Binding 
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

 
 

  onCancel() {
    this.close.emit();
  }
  // Submitted Data
  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      }, this.userId
    );
    this.close.emit();
  }
  // signals & Two-Way-Binding 
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
}
