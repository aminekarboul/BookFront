import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book-service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit, OnDestroy {

  books: Book[];
  bookSubscription: Subscription;


  constructor(private bookService: BookService) { }
  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.bookSubscription= this.bookService.bookSubject.subscribe(
      (books : Book[])=>{
        this.books = books;
      }
    );
    this.bookService.emitBook();
  }
}
