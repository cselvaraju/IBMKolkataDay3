import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { Post } from '../../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: [
    './posts.component.css',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
