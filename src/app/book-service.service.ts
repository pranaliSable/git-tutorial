import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
books : Book[] = [
  {id : 1 , name: "kite runner", description : "aman dtory ",price : "500"},
  {id : 2 , name : "kite runner", description : "aman dtory ",price : "500"},
  {id : 3 , name : "kite runner", description : "aman dtory ",price : "500"},
  {id : 4 , name : "kite runner", description : "aman dtory ",price : "500"}
]
  constructor() { }

  getBooks() : Book[]{
    return this.books;
  }

  addBooks(bokAdd : Book){
    
      let maxIndex = this.books.length ;
      //let bookWithMaxIndex = book[maxIndex];
      bokAdd.id = maxIndex + 1;
      
        this.books.push(bokAdd);
      

  }
}
