declare const wait5Secs: Promise<{}>;
declare function httpGet(url: string): Promise<any>;
declare function parseResponse(value: string): any;
declare const promise: Promise<{}>;
declare function f(): Promise<number>;
declare function fp(): Promise<number>;
declare function fns(): Promise<void>;
declare function getUser(username: string): Promise<any>;
declare function fetchAllBook(): Promise<{
    id: string;
    authorId: string;
}[]>;
declare function fetchAuthorById(authorId: string): Promise<{
    authorId: string;
}>;
declare function getBooksAndAuthor(authorId: string): Promise<{
    author: {
        authorId: string;
    };
    books: {
        id: string;
        authorId: string;
    }[];
}>;
declare function getBooksAndAuthorFixed(authorId: string): Promise<{
    author: {
        authorId: string;
    };
    books: {
        id: string;
        authorId: string;
    }[];
}>;
