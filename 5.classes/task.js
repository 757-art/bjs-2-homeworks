class PrintEditionItem {
    constructor(name, releaseDate, pageCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pageCount = pageCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5; 
    }

    set state(num) {
        if (num < 0) {
           this._state = 0;
        } else if (num > 100) 
        {
            this._state = 100;
        } else {
            this._state = num; 
        }
    }
    get state() {
        return this._state
      }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pageCount) {
        super (name, releaseDate, pageCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pageCount) {
        super (name, releaseDate, pageCount)
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pageCount) {
        super (author, name, releaseDate, pageCount)
        this.type = "novel";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pageCount) {
        super (author, name, releaseDate, pageCount)
        this.type = "detective";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pageCount) {
        super (author, name, releaseDate, pageCount)
        this.type = "fantastic";
    }
}

class Library {
    constructor(name) {
        this.name = name;    
        this.books = [];
    }

    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            for (let key in this.books[i]) {
              if (key === type && this.books[i][key] === value) {
                return(this.books[i]);
              }
            }
          }
          return (null);
    }
    giveBookByName(bookName) {
        for (const key in this.books) {
          if ((this.books[key].name) == bookName) {
            const givedBook = this.books[key];
            this.books.splice(key, 1);
            return givedBook;
          }
        }
        return (null);
      }
}
   