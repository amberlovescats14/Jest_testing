class BookService {
  constructor(dbRepo){
    if(dbRepo === null) throw 'dbRepo required'
    if(!dbRepo) throw `DBrepo required`
    this.dbRepo = dbRepo
  }
  addBook(book){
    if(!book) throw `Book is required`
    if(!book.title) throw `Title Required`
    if(!book.author) throw `Author Required`
    let existingBooks = this.dbRepo.getBooksForTitleAndAuthor(book.title, book.author)
    if(existingBooks.length > 0) throw `No duplicate books`

  }
//  const addBook = book => {
}
module.exports = BookService;