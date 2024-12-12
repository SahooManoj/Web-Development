function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
  this.info = function() {
    let output = `${title} by ${author}, ${page}, ${read}`;
    return output
  };
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')
console.log(theHobbit.info());
