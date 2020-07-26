// const wait5Sec = new Promise(((resolve, reject) => {
//     setTimeout(() => {
//         resolve(5);
//     }, 10000);
// }));
// wait5Sec.then(data => console.log(data)).catch(err => console.log(err));

// const promise = new Promise(((resolve, reject) => {
//     resolve('done');
//     reject(new Error('....'));
//     setTimeout(() => resolve('....'));
// }));
// promise.then(data => console.log(data));

import {rejects} from "assert";
import fetch from 'cross-fetch';

// function httpGet(url: string): Promise<any> {
//     return new Promise(function (resolve, reject) {
//         const request = new XMLHttpRequest();
//         request.onload = function () {
//             if (this.status === 200) {
//                 // Success
//                 resolve(this.response);
//             } else {
//                 // Something went wrong (404 etc.)
//                 reject(new Error(this.statusText));
//             }
//         };
//         request.onerror = function () {
//             reject(new Error('XMLHttpRequest Error: ' + this.statusText));
//         };
//         request.open('GET', url);
//         request.send();
//     });
// }
//
// httpGet('https://api.github.com/search/repositories?q=angular').then(
//     function (value) {
//         console.log('Contents: ' + value);
//     },
//     function (reason) {
//         console.error('Something went wrong', reason);
//     }
// );
//
// // parseJSON
// function parseResponse(value: string) {
//     try {
//         return JSON.parse(value);
//     } catch (_) {
//         return value;
//     }
// }
//
// httpGet('https://api.github.com/search/repositories?q=angular')
//     .then(parseResponse)
//     .then(data => console.log(data))
//     .catch(function (reason) {
//         console.error('Something went wrong', reason);
//     });
//
//
// async function f() {
//     return 1;
// }

// function fp() {
//     return Promise.resolve(1);
// }
//
// f().then(data => console.log('async fn', data));
// (async () => {
//     const data = await fp();
//     console.log('async await', data)
// })();

// async function fns() {
//     const promise = new Promise(((resolve, reject) => {
//         setTimeout(() => resolve('done'), 10000)
//     }))
//     const result = await promise;
//     console.log(result);
// }
// fns();

// async function getUser(username: string) {
//     try {
//         const response = await fetch(
//             `https://api.github.com/search/users?q=${username}`
//         );
//         return await response.json();
//     } catch (e) {
//         throw e;
//     }
// }
//
// getUser('twanlee').then(res => console.log(res)).catch(err => console.log(err));
// (() => {
//     let x = 0;
//     async function r5() {
//         x += 1;
//         console.log(x);
//         return 5;
//     }
//
//     (async () => {
//         x += await r5();
//         console.log(x);
//     })();
// })();
//
// (() => {
//     let x = 0;
//
//     async function r5() {
//         x += 1;
//         console.log(x);
//         return 5;
//     }
//
//     (async () => {
//         const y = await r5();
//         x += y;
//         console.log(x)
//     })();
// })();

async function fetchAllBook() {
    await new Promise(resolve => {
        console.log('Waiting 2s ...');
        setTimeout(() => resolve(), 2000);
    });
    console.log('Fetch all books')
    return [
        {
            id: 'Book 1',
            authorId: 'Author 1'
        },
        {
            id: 'Book 2',
            authorId: 'Author 2'
        },
    ]
}

async function fetchAuthorById(authorId: string) {
    console.log('fetch author by id');
    return {
        authorId,
    }
}

async function getBooksAndAuthor(authorId: string) {
    const books = await fetchAllBook();
    const author = await fetchAuthorById(authorId);
    console.log(books);
    console.log(author);
    return {
        books: books.filter(book => book.authorId === authorId),
    };
}

getBooksAndAuthor('Author 2');
console.log('===================')
async function getBooksAndAuthorFixed(authorId: string) {
    const bookPromise = fetchAllBook();
    const authorPromise = fetchAuthorById(authorId);
    const books = await bookPromise;
    const author = await authorPromise;
    return {
        author,
        books: books.filter(book => book.authorId === authorId),
    };
}

getBooksAndAuthorFixed('author-id-2');