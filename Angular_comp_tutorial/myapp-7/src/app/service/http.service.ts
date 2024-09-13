import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { map, tap } from 'rxjs/operators';

export interface Response {
  [key: string]: any;
}
export interface Post {
  id?: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  URL: string = `
  https://angular-eebee-default-rtdb.firebaseio.com/posts.json
  `;
  constructor(private http: HttpClient) {}

  Post: Post[] = [];

  createPost(postForm: FormGroup) {
    return this.http.post<FormGroup>(this.URL, postForm.value, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authToken: '123456789',
      }),
      params: new HttpParams()
        .set('auth', '123456789')
        .append('auth', '123456789')
        .append('auth', '123456789'),

      // observe is used to get the response from the server
      // 'response' is used to get the full response from the server
      observe: 'response',
    });
  }
  fetchPost() {
    return this.http.get<Response>(this.URL).pipe(
      map((res: Response) => {
        let postArray = Object.values(res);
        postArray.forEach((post, i) => {
          postArray[i] = { ...post, id: i };
        });
        return postArray;
      })
    );
  }
  deletePost(id: number) {
    this.fetchPost();
    console.log(this.Post);
    this.Post = this.Post.filter((post) => post.id !== id);
    this.http.delete(this.URL);
    this.Post.forEach((post) => {
      console.log(post);

      this.http.post<FormGroup>(this.URL, post);
    });

    // .pipe(tap) this is used to get the response from the server
    // do some operation on the response without changing the response
    // responseTYpe: 'text', this is used to get the response in text format
  }
}
