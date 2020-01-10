import React, { Component } from 'react';

class BookList extends Component {
    render() {
        return (
            <div className="book-list">
                <ul>
                    <li>Eloquent JavaScript</li>
                    <li>Cracking the Coding Interview</li>
                    <li>Advanced Algorithms for Dummies</li>
                </ul>
            </div>
        );
    }
}

export default BookList;
