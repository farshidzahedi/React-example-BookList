import React, { Component } from 'react'
import Header from './components/Header/Header'
import AddForm from './components/BookList/AddForm'
import Book from './components/BookList/Book'
import './style.css'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <AddForm />
                <Book />

            </div>
        )
    }
}
