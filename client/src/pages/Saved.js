import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

// IMPORTING REACT COMPENENT AND THE REST IMPORTOING JS FILES LIKE 
// JUMBOTRON API BOOK  FOOTER CARD LIST AND FUNCTIONS LIKE COL RAW AND 
// CONTAINER

class Saved extends Component {
  state = {
    // CREATING EMPTY ARRAY BOOKS 
    books: []
  };
  // FOR SAVED BOOKS 

  componentDidMount() {
    this.getSavedBooks();
  }
  // METHOD TO GET SAVED BOOKS GETTING API FOR SAVED BOOKS 
  // RESPONDING BOOKS DATA 

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };


  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };
  // CALLING FOR RENDER JUMBOTRON FOR SERCH FOR SVAED BOOKS 
  // AND RENDERINGGOOGLE BOOKS SEARCH 
  // AND WE HAVE ON THE LIST DIV MAPING THE WHOLE BOOK ELEMENT BY TITTLE
  // AUTHOR , DESCRIPTION AND IMAGE ETC  
  // AFTER THAT ON CLICK EVENT FOR THE HANDLEBOOKDELETE AND BUTTON NAME DELETE
  // H2 NO SAVED BOOKS 

  render() {
    return (
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
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}
// EXPORTING  THE SAVED FILE 


export default Saved;
