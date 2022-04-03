
// main.js just a simple file for testing classes function & ....

import { desktop } from "../DesktopJS/Desktop - dev/desktop.js";

const windowHTML = `
    <div class=window>
    <div class="top_bar">
        <img class="icon" src="./graphics/folder_open.png">
        <p class="title"> test window </p>

        <div class="buttons"> 
            <div class="tb_button minimize" id="minimize"></div>
            <div class="tb_button maximize" id="maximize"></div>
            <div class="tb_button close"    id="close"></div>
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
`;
const windowHTML2 = `
    <div class=window>
    <div class="top_bar">
        <img class="icon" src="./graphics/folder_open.png">
        <p class="title"> test window </p>

        <div class="buttons"> 
            <div class="tb_button" id="minimize"></div>
            <div class="tb_button" id="close"></div>
            <div class="tb_button" id="maximize"></div>
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
`;

const windowCSS = ` 

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
    grid-template-columns: 10% calc(89% - 10vh) 10vh;
}

.window .top_bar .icon{
    position :relative;
    height : 60%;
    margin: 1vh;
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
    height: 3vh;
    width: 3vh;
    cursor: pointer;
    background-size: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
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

const dtp = new desktop("desk");
      dtp.set.window.html(windowHTML);
      dtp.set.window.css(windowCSS);

let fwin = dtp.new.window("f_win","explorer",20,80,400,400,true,true,true,true);

let xwin = dtp.new.window("s_win","ps window",320,110,180,300,true,true,true);

console.log( fwin.get.x() , fwin.get.y() , fwin.get.title() , fwin.get.id() );

setTimeout(() => {
    xwin.set.title("new title");
    console.log( xwin.get.x() , xwin.get.y() , xwin.get.title() , xwin.get.id() );
},4000);


/*
let window1 = vos.add.window("win1","Explorer","black",20,20,400,400);
let window2 = vos.add.window("win3","TTL_WIND1","blue",140,150,320,400,true,true,true);

    scenario

// virtual os main object "MASTER"
const vos = new virtualOS();
    // GET/SET object's in OS For Controll Elements
    vos.set.window.html( html_str );
    vos.set.window.css( css_str );

    vos.get.window.html( );
    vos.get.window.css( );

    // Window Example in ADD object
let win1 = vos.add.window(
    id,title,x,y,width,height,foucs,draggable,resizable_H,resizable_W,minimize,maximize
);

// example : same window function like open close hide ....
win1.open( call_back_function ); 
win1.show( call_back_function );
win1.hide( call_back_function );
win1.close( call_back_function );
win1.delete( call_back_function );

// GET/SET in any window for controll
win1.set.x(); win1.get.x(); 
win1.set.y(); win1.get.y();
win1.set.width();
win1.set.height();

// ENV : Object For Controlling Environment Variables
vos.env.desktop.pass_border = false;
vos.env.desktop.sorted_elements = true;
vos.env.desktop.icons_size = "34px";
vos.env.notification.sound = true;
*/