import { Component, OnInit } from '@angular/core';
import { BlogService } from "../blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
bloggetjsonarray=[];
  constructor(private blogs:BlogService) { 
    this.bloggetjsonarray=blogs.getMyJson()
    console.log(this.bloggetjsonarray[0].user.year[2012].month.January.dates)
  }

  ngOnInit() {
  }

}
