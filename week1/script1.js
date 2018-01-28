(function () {
    "use strict";
    let books = ["sapiens_a_brief_history_of_humankind",
        "homo_deus_a_brief_history_of_tomorrow",
        "the_selfish_gene",
        "the_future_of_mind",
        "undeniable_evolution_science_of_creation",
        "why_the_west_is_best",
        "the_story_of_human_body",
        "a_brief_history_of_time",
        "the_physicist_and_the_philosopher",
        "guns_germs_and_steel"];
    let imgObj = {
        sapiens_a_brief_history_of_humankind: "images/sapiens_a_brief_history_of_humankind.png",
        homo_deus_a_brief_history_of_tomorrow: "images/homo_deus_a_brief_history_of_tomorrow.png",
        the_selfish_gene: "images/the_selfish_gene.png",
        the_future_of_mind: "images/the_future_of_mind.png",
        undeniable_evolution_science_of_creation: "images/undeniable_evolution_science_of_creation.png",
        why_the_west_is_best: "images/why_the_west_is_best.png",
        the_story_of_human_body: "images/the_story_of_human_body.png",
        a_brief_history_of_time: "images/a_brief_history_of_time.png",
        the_physicist_and_the_philosopher: "images/the_physicist_and_the_philosopher.png",
        guns_germs_and_steel: "images/guns_germs_and_steel.png"
    };
    let booksInf = {
        sapiens_a_brief_history_of_humankind: {
            title: "Sapiens: A Brief History of Humankind",
            language: "English",
            author: "Yuval Noah Harari",
            line1: [
                "Life is beautiful and you should enjoy and be happy.Where we came from and why there are so many diversity.",
                "Iceage, evolution, industrial age, computerized simulations"
            ]
        },
        homo_deus_a_brief_history_of_tomorrow: {
            title: "Homo Deus: A Brief History of Tomorrow",
            language: "English",
            author: "Yuval Noah Harari"
        },
        the_selfish_gene: {
            title: "The Selfish Gene",
            language: "English",
            author: "Richard Dawkins"
        },
        the_future_of_mind: {
            title: "The future of the mind",
            language: "English",
            author: "Michio Kaku"
        },
        undeniable_evolution_science_of_creation: {
            title: "Undeniable: Evolution of the Science of Creation",
            language: "English",
            author: "Bill Nye"
        },
        why_the_west_is_best: {
            title: "Why the West is Best",
            language: "English",
            author: "Ibn Warraq"
        },
        the_story_of_human_body: {
            title: "The Story of Human Body",
            language: "English",
            author: "Daniel E. Lieberman"
        },
        a_brief_history_of_time: {
            title: "A Brief History of Time",
            language: "English",
            author: "Stephen Hawking"
        },
        the_physicist_and_the_philosopher: {
            title: "The Physicist and the Philosopher",
            language: "English",
            author: "Jimena Canales"
        },
        guns_germs_and_steel: {
            title: "Guns, Germs and Steel",
            language: "English",
            author: "Jared Diamond"
        }
    };
    const root = document.getElementById('root');
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    const myFavBooks = document.createElement('h1');
    myFavBooks.innerHTML = 'My Favorite Books';
    header.appendChild(myFavBooks);
    root.appendChild(header);
    const ul = document.createElement('ul');
    ul.innerHTML = '';
    root.appendChild(ul);

    function renderBooks() {
        for (let i = 0; i < books.length; i++) {
            const li = document.createElement('li');
            li.setAttribute('id', books[i]);
            const h1 = document.createElement('h1');
            h1.innerHTML = booksInf[books[i]].title;
            const h3 = document.createElement('h3');
            h3.innerHTML = 'the author: ' + booksInf[books[i]].author;
            const p = document.createElement('p');
            p.innerHTML = 'the language: ' + booksInf[books[i]].language;
            const lineOne = document.createElement('h2');
            lineOne.innerHTML = booksInf[books[i]].line1;
            const img = document.createElement('img');
            img.setAttribute('src', imgObj[books[i]]);
            img.setAttribute('width', '500 %');
            li.appendChild(h1);
            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(lineOne);
            li.appendChild(img);
            ul.appendChild(li);
        }
    }
    renderBooks();
})();