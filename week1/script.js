'use strict'
//1-Open a new js file and start by declaring an array that contains 10 strings. These strings should be 
//of book titles you have read(or made up) and be lowercase without spaces or special characters so that
//you can use these later as Id's. (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).
let myBooks = [
    "sapiens_a_brief_history_of_humankind",
    "homo_deus_a_brief_history_of_tomorrow",
    "the_selfish_gene",
    "the_future_of_mind",
    "undeniable_evolution_science_of_creation",
    "why_the_west_is_best",
    "the_story_of_human_body",
    "a_brief_history_of_time",
    "the_physicist_and_the_philosopher",
    "guns_germs_and_steel"
];
console.log(myBooks + "\n____________________________");
//3.Make a function (or functions) that generate a ul with li elements for each book ID in the array 
//using a for loop.
// function renderList() {
//     const myList = document.getElementById("bookDiv");
//     const theList = document.createElement("ul");
//     myList.appendChild(theList);

//     for (let numberOfLi = 0; numberOfLi < myBooks.length; numberOfLi++) {
//         var indexOfmyBooks = myBooks[numberOfLi];
//         indexOfmyBooks = document.createElement('li');
//         theList.appendChild(indexOfmyBooks);
//     }
//     console.log(myList);
// }
// renderList();

//4.Make an object containing information for each book.Each item(object) in this object should have the book ID
//you thought up in point 1 as a key, and it should have at least the following fields:title, language and author.
const myBooksObj = [
    {
        id: "foragers",
        title: "Sapiens: A Brief History of Humankind",
        language: "English",
        author: "Yuval Noah Harari",
        cover: "images/sapiens_a_brief_history_of_humankind.png"
    },
    {
        id: "future",
        title: "Homo Deus: A Brief History of Tomorrow",
        language: "English",
        author: "Yuval Noah Harari",
        cover: "images/homo_deus_a_brief_history_of_tomorrow.png"
    },
    {
        id: "survivalOftheFittest",
        title: "The Selfish Gene",
        language: "English",
        author: "Richard Dawkins",
        cover: "images/the_selfish_gene.png"
    },
    {
        id: "mindCosmos",
        title: "The future of the mind",
        language: "English",
        author: "Michio Kaku",
        cover: "images/the_future_of_mind.png"
    },
    {
        id: "bigBang",
        title: "Undeniable: Evolution of the Science of Creation",
        language: "English",
        author: "Bill Nye",
        cover: "images/undeniable_evolution_science_of_creation.png"
    },
    {
        id: "fundamentalism",
        title: "Why the West is Best",
        language: "English",
        author: "Ibn Warraq",
        cover: "images/why_the_west_is_best.png"
    },
    {
        id: "antWallClimbing",
        title: "The Story of Human Body",
        language: "English",
        author: "Daniel E. Lieberman",
        cover: "images/the_story_of_human_body.png"
    },
    {
        id: "spaceAndtime",
        title: "A Brief History of Time",
        language: "English",
        author: "Stephen Hawking",
        cover: "images/a_brief_history_of_time.png"
    },
    {
        id: "relativity",
        title: "The Physicist and the Philosopher",
        language: "English",
        author: "Jimena Canales",
        cover: "images/the_physicist_and_the_philosopher.png"
    },
    {
        id: "smallPox",
        title: "Guns, Germs and Steel",
        language: "English",
        author: "Jared Diamond",
        cover: "images/guns_germs_and_steel.png"
    }
];

// const bookImages = {
    // foragers: "images/sapiens_a_brief_history_of_humankind.png",
    // future: "images/homo_deus_a_brief_history_of_tomorrow.png",
    // survivalOftheFittest: "images/the_selfish_gene.png",
    // mindCosmos: "images/the_future_of_mind.png",
    // bigBang: "images/undeniable_evolution_science_of_creation.png",
    // fundamentalism: "images/why_the_west_is_best.png.png",
    // antWallClimbing: "images/the_story_of_human_body.png",
    // spaceAndtime: "images/a_brief_history_of_time.png",
    // relativity: "images/the_physicist_and_the_philosopher.png",
    // smallPox: "images/guns_germs_and_steel.png"
// }
//5.Now change the function you used to display the book ID's in a list to take the actual information about the book 
//from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, 
//a heading for the title.
function renderList() {
    let pTitle = document.createElement("h1");
    pTitle.textContent = "Here you you will see my books!";
    document.body.appendChild(pTitle);

    console.log(myBooksObj);
    const myList = document.getElementById("bookDiv");
    const theList = document.createElement("ul");
    myList.appendChild(theList);

    for (let eachObject = 0; eachObject < myBooksObj.length; eachObject++) {
        const h2 = document.createElement("h2");
        let bookTitle = myBooksObj[eachObject].title;
        h2.innerHTML = bookTitle;
        myList.appendChild(h2);

        let idBook = myBooksObj[eachObject].id;
        let listAuthor = document.createElement("li");
        let bookAuthor = myBooksObj[eachObject].author;
        listAuthor.innerHTML = bookAuthor;
        myList.appendChild(listAuthor);

        let listLang = document.createElement("li");
        let bookLanguage = myBooksObj[eachObject].language;
        listLang.innerHTML = bookLanguage;
        myList.appendChild(listLang);

        let imagesVar = document.createElement("img");
        let eachImage = myBooksObj[eachObject].cover;
        imagesVar.setAttribute("src", eachImage);
        imagesVar.innerHTML = eachImage;
        myList.appendChild(imagesVar);

        // for (let eachImage = Object.keys(bookImages); idBook === eachImage; eachImage++) {
        //     const imagesVar = document.createElement("img");
        //     imagesVar.setAttribute("src", eachImage);
        //     myList.appendChild(imagesVar);
        // }
    }

    // for (let numberOfLi = 0; numberOfLi < myBooks.length; numberOfLi++) {
    //     let indexOfmyBooks = myBooksObj[numberOfLi];
    //     indexOfmyBooks = document.createElement('li');
    //     theList.appendChild(indexOfmyBooks);

    //  indexOfmyBooks.innerHTML=
}

renderList();

// Beautify your html page with css, add sources and alts to each of the images.
// Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the
//image source (e.g. {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). Now loop over these entries
//(hint: Object.keys(objectName) gives you an array containing the keys). 
//Then write a function which places an image at the corresponding li element. 
//Remember that Objects are not ordered, so you cannot guarantee that the first key is the first li element. 
//(Hint: you could give each li item an id tag by modifying the function you made before)