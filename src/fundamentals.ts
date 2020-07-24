/**
 * Variable and Data type
 */

// tslint:disable

import {toASCII} from "punycode";

/**
 * var vs let/const
 */
// function main() {
//     console.log("START");
//         if(true){
//             var lang = "vi";
//             let target = "en-us";
//             console.log("inside block");
//             console.log(target);
//         }
//         console.log(lang);
//         console.log(target);
//     Expect: lỗi xảy ra (TS2304: Cannot find name 'target'.)
// }

// (function main(){
//     var x = 5;
//     console.log(x);
//     var x =10;
//     console.log(x);
//     let y=55;
//     console.log(y);
//
//     let y =55;
//     console.log(y);
//     let y=100;
//     console.log(y)
// })();

(function main() {
    console.log(x);
    var x = 5;

    console.log(y);
    let y = 10;
})();
/**
 * Data types
 */
(function main() {
    let message : string;
    let total: number = 100;
    let isProduction = true;
    let prices: Array<number> = [120,88,60];
    let languages: string[] = ['vi','en-us'];
    let now = new Date();
    let unknown:any;

    enum Direction{
        UP,
        DWON,
        LEFT,
        RIGHT
    };

    function log(msg: string) {
        console.log(msg)
    }
    interface Ipost{
        id:string;
        title:string;
        body?:string;
    }
    isProduction = false;
    unknown = Direction.UP;
    unknown = 'changed';
    const ipost : Ipost={

    };
    message=50;
    function getPost(postId: string): Ipost{
        return {
            id:postId,
            title:'Post Title',
            body: 'Post body',
            extra: 'data'
        }as Ipost;
    }
})

function main() {}

// tslint:enable

main();
