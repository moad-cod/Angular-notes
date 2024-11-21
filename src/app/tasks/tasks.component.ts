import { Component, Input } from '@angular/core';
// import { TaskComponent } from "./task/task.component";
// import { identifierName } from '@angular/compiler';
// import { NewTaskComponent } from "./new-task/new-task.component";
// import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  // imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required: true}) name!:string | undefined;
  isAddingTask = false;
  // Dependency injection
  constructor( private tasksService: TasksService) {}

  //instantiate service
  // private taskService = new TaskService();


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
