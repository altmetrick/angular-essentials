import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../tasks';
import { NewTaskData } from './task/task.model';

// 14 Services
// Use services to manage data that is needed by multiple components

// 14.0 Register your service  by using @Injectable decorator
// by injecting your service class as a dependency angular will
// initiate an object with it and share that instance object to needed components

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = DUMMY_TASKS;

  constructor() {
    //read tasks from local storage
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }
  removeTask(id: string) {
    console.log(id, 'from event');
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }
}
