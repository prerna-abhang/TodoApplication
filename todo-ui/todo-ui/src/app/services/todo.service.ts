import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  //methods to communicate with our backend APIs

  getTodos() {
    let url = environment.TODO.BASE_URL + environment.TODO.GET_TODO
    try {
      return this.httpClient.get(url);
    }
    catch (error) {
      console.log(error);
    };
  }

  addTodos(body) {
    let url = environment.TODO.BASE_URL + environment.TODO.ADD_TODO
    try {
      return this.httpClient.post(url, body);
    }
    catch (error) {
      console.log(error);
    };

  }

  getInProgressTodos() {
    let url = environment.TODO.BASE_URL + environment.TODO.IN_PROGRESS_TODO
    try {
      return this.httpClient.get(url);
    }
    catch (error) {
      console.log(error);
    };
  }

  getCompletedTodos() {
    let url = environment.TODO.BASE_URL + environment.TODO.COMPLETED_TODO
    try {
      return this.httpClient.get(url);
    }
    catch (error) {
      console.log(error);
    };
  }
}
