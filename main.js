
// main.js just a simple file for testing classes function & ....

import {os} from "../virtualOS/virtualOS - dev/vritualOS.js";

const windowHTML = `
    <div class=window>
    <div class="top_bar">
        <img class="icon" src="./graphics/folder_open.png">
        <p class="title"> test window </p>

        <div class="buttons"> 
            <div class="tb_button" id="minimize"></div>
            <div class="tb_button" id="maximize"></div>
            <div class="tb_button" id="close"></div>
        </div>
    </div>
    
    <div class="container"> </div>

    <div class="resize resize_horizontal" id="resize_top"> </div>
    <div class="resize resize_horizontal" id="resize_down"> </div>

    <div class="resize resize_vertical" id="resize_left"> </div>
    <div class="resize resize_vertical" id="resize_right"> </div>

    <div class="resize resize_corner" id="resize_tl"> </div>
    <div class="resize resize_corner" id="resize_tr"> </div>
    <div class="resize resize_corner" id="resize_dl"> </div>
    <div class="resize resize_corner" id="resize_dr"> </div>

</div>
`
;

const windowCSS = ` 
*{
    --window_in_foucs_color : #0055e5;
    --window_out_focus_color : rgb(122, 153, 227);
    --window_radius : 0.8vh  0.8vh  0vh 0vh;
    --win_deflt_font_size : 2.5vh;
    --window_title_bar_height : 5vh;
    --win_title_bar_margin_btwn_elts : 1vh;
    --window_resize : 1vh;
}

.window {
    position: absolute;
    border-radius: 0.8vh  0.8vh  0vh 0vh;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.06);
    overflow: hidden;
    background: #01163b;
    height : 200px;
    width : 50%;
    top: 10px;
    left : 100px;
}

.window .top_bar {
    position :relative;
    cursor: move;
    user-select: none;
    width: 100%;
    height: 4vh;
    overflow: hidden;
    background-color: #0055e5;
    display: grid;
    grid-template-columns: 10% 66% 24%;
}

.window .top_bar .icon{
    position :relative;
    height : 60%;
    margin: 5%;
    display: inline-block;
}

.window .top_bar .title{
    position: relative;
    font-family: Microsoft Sans Serif;
    color : white;
    font-weight: bold;
    font-size : 2.5vh;
    display:  inline-block;
    cursor: default;
    user-select: none;
    margin-top: 0.5vh;
    /* text-align: center; */
}

.window .top_bar .buttons{
    display : grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.window .top_bar .tb_button{
    position: relative;
    display: inline-block;
    margin-top: 0.5vh;
    height: 3vh;
    width: 3vh;
    cursor: pointer;
    background-size: cover;
    
}


.window .top_bar #minimize{
    background-image : url("./graphics/window_min.png");
}

.window .top_bar #maximize{
    background-image : url("./graphics/window_max.png");
}

.window .top_bar #close{
    background-image : url("./graphics/window_close.png");
}

.window .container {
    position: relative;
    width: calc(100% - 1vh * 2);
    height: calc(100% -  ( 5vh ));
    left: 1vh;
    overflow: auto;
    background-color : rgb(65, 64, 64);
}


.window .resize_horizontal{
    position: absolute;
    width: calc(100% - 2vh);
    height: 1vh;
    left: 1vh;
    cursor: s-resize;
}

.window #resize_top{
    top : 0%;
}

.window #resize_down{
    top : calc(100%  - 1vh);
}

.window .resize_vertical{
    position: absolute;
    width: 1vh;
    top: 1vh;
    height: calc(100% - 2vh);
    cursor: e-resize;
}

.window #resize_left{
    left: 0%;
}

.window #resize_right{
    left : calc(100%  - 1vh);
}

.window .resize_corner{
    position : absolute;
    width: 1vh;
    height: 1vh;
}

.window #resize_tl{
    top :0vh;
    left:0vh;
    cursor:se-resize;
}
.window #resize_tr{
    top :0vh;
    left:calc(100% - 1vh);
    cursor:sw-resize;
}
.window #resize_dl{
    top:calc(100% - 1vh);
    left:0vh;
    cursor:sw-resize;
}
.window #resize_dr{
    top: calc(100% - 1vh);
    left:calc(100% - 1vh);
    cursor:se-resize;
}

.resize{
    z-index: 9;
}
`;


const vos = new os(windowHTML , windowCSS);

    vos.env.templates.window.setStyle(windowCSS);
    vos.env.templates.window.setHtml(windowHTML);

let window1 = vos.add.window("win1","Explorer","black",20,20,400,400);
let window2 = vos.add.window("win3","TTL_WIND1","blue",140,150,320,400,true,true,true);

/*
window2.show();
window1.show();
*/
