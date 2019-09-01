// https://repl.it/@istrate/Unit-Testing-and-Mocks

const BookService = require('./BookService');

describe('BookService', ()=> {
  describe('constructor', () => {
    // should must of will
    it('should reject a null dbRepo', ()=> {
      //expect is like assert
      expect(()=> {
      new BookService(null)
      }).toThrow();
    });
    it(`should throw new error if undefined`, ()=> {
      expect(()=> {
        new BookService()
        //u can tell it to expect a certain text
      }).toThrow(`DBrepo required`)
    });
  })
//testing a function inside the class
  describe('addBook', ()=> {
    it('should not be null', ()=> {
      // MOCKING
      let dbRepo = {}
      let bookService = new BookService(dbRepo)
      expect(()=> {
        bookService.addBook()
      }).toThrow()
    });
    it('should have a title', () => {
      let dbRepo = {}
      let book = {
        title: null,
        author: 'Bob Smith'
      }
      let bookservice = new BookService(dbRepo)
      expect(()=> {
        bookservice.addBook(book)
      }).toThrow(`Title Required`)

    });
      it('should have a author', () => {
      let dbRepo = {}
      let book = {
        title: 'Spring Creek',
        author: null
      }
      let bookservice = new BookService(dbRepo)
        expect(()=> {
        bookservice.addBook(book)
      }).toThrow(`Author Required`)

    })
    it('should reject if book already exist', ()=> {
      let existingBooks = [{}]
      let dbRepo = {
          getBooksForTitleAndAuthor: jest.fn().mockReturnValueOnce(existingBooks)
      }
      let book = {
        title: 'Spring Creek',
        author: 'Jane Doe'
      }
      let bookservice = new BookService(dbRepo)
        expect(()=> {
        bookservice.addBook(book)
      }).toThrow(`No duplicate books`)
    })
  })

})
