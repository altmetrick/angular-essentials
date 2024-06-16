import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  //14.1 Add a service to a component by dependency injection
  // to 'tell' angular about the dependency you need
  // as adding it as a parameter to the constructor and providing type of the service
  //1 private taskService: TasksService
  //2 constructor(tasksService: TasksService) {
  // and to make this 'taskService' available in the rest of the class
  // we need to store it in a property of a class
  //3 this.taskService = tasksService;
  //}
  // use shortcut with private so the tasksService property creates automatically
  constructor(private tasksService: TasksService) {}

  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  isAddingTask = false;

  get userTasks() {
    //use taskService to manipulate data
    return this.tasksService.getUserTasks(this.userId);
  }
  onStartAddingTask() {
    this.isAddingTask = true;
  }
  onCloseAddingTask() {
    this.isAddingTask = false;
  }

  // onCompleteTask(id: string) {
  //   console.log(id, 'from event');
  //   this.tasksService.removeTask(id);
  // }
}
