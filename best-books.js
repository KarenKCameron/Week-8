const formEl = document.getElementById('best-books-form');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const yearEl = document.getElementById('year');
  const monthEl = document.getElementById('month');
  const dateEl = document.getElementById('date');
  const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/'

  const API_KEY = 
  const year = yearEl.value;
  console.log(year);
  // const yr = toString(year);
  const month = monthEl.value;
  const date = dateEl.value;
  const formInput = `${year}-${month}-${date}`;
  const url = `${BASE_URL}${formInput}/hardcover-fiction.json?api-key=${API_KEY}`;



  // Fetch bestselling books for date and add top 5 to page

  fetch(url)
    .then(function (data) {
      // debugger;
      return data.json();
    })
    .then(function (responseJson) {
      console.log(responseJson);
      const ul = document.getElementById("best-sellers")
      for (let i = 0; i < 5; i++) {

        const title = responseJson.results.books[i].title;
        console.log(title);

        const author = responseJson.results.books[i].author;
        console.log(author);

        const description = responseJson.results.books[i].description;
        console.log(description);

        const bookImage = responseJson.results.books[i].book_image;
        console.log(bookImage);

        // let image = (async function(){
        //   const response = await fetch(bookImage)
        //   const blob = await response.blob()

        //   const imageUrl = URL.createObjectURL(blob)

        //   const image = new Image()
        //   image.src = imageUrl

        // })()

        let item = document.createElement("li")
        item.textContent = `${title}, ${author}, ${description}`
        ul.appendChild(item);


      }


    });


});