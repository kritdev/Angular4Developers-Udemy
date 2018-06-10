import { Component, OnInit } from '@angular/core';
import { Task } from '../Task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[] = [];

  constructor() { }

  ngOnInit() {
    this.tasks.push(new Task(1, "Test Task 1", true, "07/08/17"));
    this.tasks.push(new Task(2, "Test Task 2", true, "07/08/17"));
    this.tasks.push(new Task(3, "Test Task 3", false, "07/08/17"));
  }

  getDueDateLabel(task:Task){
    return task.completed ? 'label-success' : 'lable-primary';
  }

  onTaskChange(event, task){
    console.log('task has changed.')
  }

}
