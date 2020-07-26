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
require("../scss/styles.scss");
function fetchRepo() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch('https://api.github.com/search/repositories?q=angular');
        res = (yield res.json());
        return res.items;
    });
}
function createItem(text) {
    const item = document.createElement('li');
    item.textContent = text;
    return item;
}
const container = document.querySelector('.app .list');
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetchRepo();
        res.forEach((item) => {
            const li = createItem(item.name);
            container.appendChild(li);
        });
    });
}
main();
//# sourceMappingURL=index.js.map