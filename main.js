
// main.js just a simple file for testing classes function & ....

import {virtualOS} from "./virtualOS.js";


const windowHTML = `
    <div class=window>
    <div class="title_bar">
        <img class="window_icon" src="./graphics/folder_open.png" alt="icon">
        <p class="title"> test window </p>

        <div class="minimize" alt="minimize"></div>
        <div class="minimize" alt="close"></div>
        <div class="minimize" alt="maximize"></div>
    </div>
    
    <div class="container"> </div>

    <div class="resize_left"> </div>
    <div class="resize_right"> </div>

    <div class="resize_top"> </div>
    <div class="resize_down"> </div>

    <div class="resize_tl"> </div>
    <div class="resize_tr"> </div>
    <div class="resize_dl"> </div>
    
    <div class=resize_dr> </div>
</div>`
;

const windowCSS = ` 
.window {
    position: absolute;
    border-radius: 0.8vh  0.8vh  0vh 0vh;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.06);
    overflow: hidden;
}

.window .title_bar {
    cursor: move;
    user-select: none;
    width: 100%;
    height: 4vh;
    overflow: hidden;
}

.window .title_bar .icon{
    position :relative;
    width : 3vh;
    height : 3vh;
    top: 1vh;
    left: 1vh;
    float :left;
}

.window .title_bar .title{
    position: relative;
    font-family: Microsoft Sans Serif;
    color : white;
    font-weight: bold;
    font-size : 2.5vh;
    top: 1vh;
    float: left;
    margin-left : 1.5vh;
    cursor: default;

    -webkit-touch-callout:  none;      S/* iOS Safari */
    -webkit-user-select:    none;      /* Safari */
     -khtml-user-select:    none;      /* Konqueror HTML */
       -moz-user-select:    none;      /* Old versions of Firefox */
        -ms-user-select:    none;      /* Internet Explorer/Edge */
            user-select:    none;      /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

.window .title_bar .minimize{
    background-image : url("./graphics/window_min.png");
    position: relative;
    float: right;
    top: 1vh;
    width: 3vh;
    height: 3vh;
    right: 1vh;
    cursor: pointer;

}

.window .title_bar .maximize{
    background-image : url("./graphics/window_max.png");
    position: relative;
    float: right;
    top: 1vh;
    width: 3vh;
    height: 3vh;
    right: 1vh;
    cursor: pointer;
}

.window .title_bar .close{
    background-image : url("./graphics/window_close.png");
    position: relative;
    float: right;
    top: 1vh;
    width: 3vh;
    height: 3vh;
    right: 1vh;
    cursor: pointer;
}

.window .container {
    position: relative;
    width: calc(100% - 1vh * 2);
    height: calc(100% -  ( 1vh * 2 + 5vh ));
    left: 1vh;
    top : 1vh;
    overflow: auto;
    background-color : white;
}
`;


const os = new virtualOS(windowHTML , windowCSS);

let window1 = os.new_window("win1","Explorer","black",20,20,400,400);
let window2 = os.new_window("win3","TTL_WIND1","blue",140,150,320,400,true,true,true);

window2.show();
window1.show();
