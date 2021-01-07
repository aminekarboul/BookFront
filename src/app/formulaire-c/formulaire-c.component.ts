import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book-service';

@Component({
  selector: 'app-formulaire-c',
  templateUrl: './formulaire-c.component.html',
  styleUrls: ['./formulaire-c.component.css']
})
export class FormulaireCComponent implements OnInit {

  bookForm : FormGroup;


  constructor(private formBuilder: FormBuilder, private bookService : BookService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.bookForm = this.formBuilder.group(
      {
      title:['', Validators.required],
      autor:['', Validators.required],
      discription:['', Validators.required],
      genre:this.formBuilder.array([])
    });
  }
  get title() {return this.bookForm.get('title');}
  get autor() {return this.bookForm.get('autor');}
  get discription() {return this.bookForm.get('discription');}
  get genre() {return this.bookForm.get('genre');}

  onSubmitForm() {
    const formValue = this.bookForm.value;
    const newBook = new Book(
      formValue['title'],
      formValue['autor'],
      formValue['discription'],
      formValue['genre'] ? formValue['genre'] : []
    );
    this.bookService.AddBook(newBook);
    //this.router.navigate(['/users']);
  }
  onAddGenre() {
    const newGenreControl = this.formBuilder.control(null, Validators.required);
    this.getGenre().push(newGenreControl);
}
  getGenre(): FormArray {
    return this.bookForm.get('genre') as FormArray;
  }
}
