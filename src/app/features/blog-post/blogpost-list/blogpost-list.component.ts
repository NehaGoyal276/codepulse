import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit{

  blogposts$?: Observable<BlogPost[]>

  constructor(private blogPostService: BlogPostService) {   
    
  }
  ngOnInit(): void {
    //get all the blogposts from api
    this.blogposts$ = this.blogPostService.getALlBlogPosts();

  }

}
