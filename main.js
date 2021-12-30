
// main.js just a simple file for testing classes function & ....

import {window} from "./window.js"


let window1 = new window("win1",20,20,400,400 , "title_test");

window1.show();

let window2 = new window("win3",80,100,320,400,"twind",true,false,false);

window2.show();
/*
setTimeout(() =>  {
    window1.maximizeWindow();
}, 1500);
*/