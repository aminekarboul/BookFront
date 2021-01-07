import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import {environment} from "../environments/environment"
/*import { MatSnackBar } from '@angular/material/snack-bar';*/


@Injectable({
   providedIn: 'root'
})
export class BookService {
  baseUrl= environment.baseUrl;
  constructor(private http: HttpClient/*,private snackBar: MatSnackBar*/){  }
  getAllBooks(): Observable<any>{
    return this.http.get ( this.baseUrl + 'book');
  }
  deleteBook(id): Observable<any>{
    return this.http.delete ( this.baseUrl + '/books/'+id);
  }
  UpdateBook(id,body): Observable<any>{
    return this.http.put ( this.baseUrl + '/books/'+id, body);
  }
  AddBook(body): Observable<any>{
    return this.http.post ( this.baseUrl + '/books/',body );
  }
  /*openSnackBar(message: string, action:string){
    this.snackBar.open(message,action,{
      duration:3000
    })
  }*/



/*  private book: Book[]=[
    new Book('harry potter','J. K. Rowling','novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.',['fantasy','drama'])
  ];
  bookSubject = new Subject<Book[]>();

  emitBook() {
    this.bookSubject.next(this.book.slice());
  }

  addBook(book: Book) {
    this.book.push(book);
    this.emitBook();
  }*/
}
