import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../../models/Post';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl, httpOptions);
  }

  // savePost(post: Post): Observable<Post> {
  //   return this.http.post<Post>(this.postsUrl, post, httpOptions);
  // }
}
