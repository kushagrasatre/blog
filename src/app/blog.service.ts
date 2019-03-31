import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogjson=[
    {
      "user":{
        "year":{
          "2012":{
            "month":{"January":{"dates":[1,2,3,4,5],"content":["This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version."]},
            "Febuary":{},
            "March":{}}
          }
        }
      }
    }
  ];
  constructor() { }
  getMyJson() {
    return this.blogjson;
  }
}
