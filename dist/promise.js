"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function fetchAllBook() {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise(resolve => {
            console.log('Waiting 2s ...');
            setTimeout(() => resolve(), 2000);
        });
        console.log('Fetch all books');
        return [
            {
                id: 'Book 1',
                authorId: 'Author 1'
            },
            {
                id: 'Book 2',
                authorId: 'Author 2'
            },
        ];
    });
}
function fetchAuthorById(authorId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('fetch author by id');
        return {
            authorId,
        };
    });
}
function getBooksAndAuthor(authorId) {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield fetchAllBook();
        const author = yield fetchAuthorById(authorId);
        console.log(books);
        console.log(author);
        return {
            books: books.filter(book => book.authorId === authorId),
        };
    });
}
getBooksAndAuthor('Author 2');
//# sourceMappingURL=promise.js.map