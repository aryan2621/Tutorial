import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService, Post } from 'src/app/service/http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  constructor(private httpService: HttpService) {}

  postForm: FormGroup = new FormGroup({});
  Post: Post[] = [];

  isError: boolean = false;
  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    });
    this.getPost();
  }
  createPost() {
    this.httpService.createPost(this.postForm).subscribe(
      (res) => {
        this.postForm.reset();
        this.getPost();
      },
      (err) => {
        console.log(err);
        this.isError = true;
      }
    );
  }
  getPost() {
    this.httpService.fetchPost().subscribe((res: Post[]) => {
      this.Post = res;
    });
  }
  deletePost(id: any) {
    this.httpService.deletePost(id);
  }
}
