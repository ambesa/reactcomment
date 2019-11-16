import React, { Component } from "react";
  //  importing react com,penent 
import Jumbotron from "../components/Jumbotron";
// importing jumbotron 
import Card from "../components/Card";
// importing the card function  from compenent folder under card named file 


import Form from "../components/Form";
// import form compenent folder named form


import Book from "../components/Book";
// import from copenent foldr file book

import Footer from "../components/Footer";
// import from copenent folder file footer


import API from "../utils/API";
  // import api from utils / api

import { Col, Row, Container } from "../components/Grid";
// importing functions container, row, column from compenent folder/grid
import { List } from "../components/List";

class Home extends Component {
  state = {
    //CREATING ARRAY OF BOOKS 
    books: [],
    q: "",
    // CREATING MEASSGE VARIABLE SEARCH FOR BOOKS TO BEGIN 
    message: "Search For A Book To Begin!"
  };

  handleInputChange = event => {
   //  CREATING A NAME AND VALUE  AT EVENT  TARGER
    const { name, value } = event.target;
    this.setState({
      // AND SET THE NAME AND VALUE 
      [name]: value
    });
  };
  //GETTING BOOK METHOD FOR GETTING API , AND RESPONDING BOOKS.DATA
  // AMD CATHING IN BOOKS ARRAY  

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };
 // HANDLE FORM SUBMIT 

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };
  // METRHOD HANDLEBOOKSAVE CREATING CONSTANT BOOK AND FINDING BY ID

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);
    // SAVING BOOK API WITH VARIABLES GOOGLE ID,TITTLE, SUBTITTLE,
    // LINK AUTHORS , DESCRIPTIONS AND IMAGE .

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };
   // RENDING PART OF THE HOME COMPENENT 

  render() {
    return (
      // RENDRING JUMBOTRON AND THE ABOBOVE METHODS HANDLEINPUT, Q  AND HANDLEFORMSUBMIT
      // AND IN THE LIST DIV RENDER THE MAP WE HAVE BOOK ITEM TO MAP OVER
      // THE WHOLE BOOK ARRAY IMAGE , DESCRIPTION , AUTHOR , LINK , SUBTITTLE
      // AND WE HAVE ONCLICK EVENT FOR SAVEBUTTON USING HANDLEBOOK SAVE METHOD 
      // BOOK.ID TO SAVE A BOOK
      // AND AT THE LAST DIV WE HAVE IMPORTED THE FOOTER JS FILE THAT CREATED 
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}
// LASTLY EXPORTING THE HOME FILE 

export default Home;
