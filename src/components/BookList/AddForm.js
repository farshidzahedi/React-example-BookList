import React, { Component } from "react";
import Book from "./Book";

export default class AddForm extends Component {
  constructor() {
    super();

    this.titleHandler = this.titleHandler.bind(this);
    this.authorHandler = this.authorHandler.bind(this);
    this.yearHandler = this.yearHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
      books: [],
      title: "",
      author: "",
      year: "",
    };
  }

  titleHandler(event) {
    this.setState({title:event.target.value})
  }
  authorHandler(event) {
    this.setState({author:event.target.value})
  }
  yearHandler(event) {
    this.setState({year:event.target.value})
  }

  submitHandler(event){
    event.preventDefault()
    let {title,author,year}=this.state
    if(title,author,year){
        let newBook={
            id:this.state.books.length+1,
            title,
            author,
            year
        }
        this.setState({
            books:[...this.state.books,newBook]
        })
        this.setState({
            title: "",
            author: "",
            year: "", 
        })
    }
  }



  render() {
    return (
      <>
        <form id="book-form" autocomplete="off" onSubmit={this.submitHandler}>
          <div className="form-group">
            <label for="title">عنوان کتاب</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={this.state.title}
              onChange={this.titleHandler}
            />
          </div>

          <div className="form-group">
            <label for="author">نویسنده</label>
            <input
              type="text"
              id="author"
              className="form-control"
              value={this.state.author}
              onChange={this.authorHandler}
            />
          </div>

          <div className="form-group">
            <label for="year">سال انتشار</label>
            <input
              type="text"
              id="year"
              className="form-control"
              value={this.state.year}
              onChange={this.yearHandler}
            />
          </div>
          <button type="submit" className="btn btn-warning btn-block add-btn">افزودن کتاب</button>
        </form>
        <table class="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th>عنوان کتاب</th>
              <th>نویسنده</th>
              <th>سال انتشار</th>
            </tr>
          </thead>
          <tbody id="book-list">
           {this.state.books.map(book=>(
             <Book {...book} key={book.id}  />
           ))}
          </tbody>
        </table>
      </>
    );
  }
}
