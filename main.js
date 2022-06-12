
// main.js just a simple file for testing classes function & ....

import { desktop } from "../DesktopJS/Desktop-dev/desktop.js";

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

const desk = new desktop("desk");
      desk.set.window.html(windowHTML);

let fwin = desk.new.window("f_win","explorer",20,80,400,400,true,false,false).open();

//let xwin = dtp.new.window("s_win","ps window",320,110,180,300,true,true,true);
let xwin  = desk.new.window("browser","browser",200,100,200,300,true,true,true).open();

console.log( xwin );
console.log( desk.running.windows["browser"] );

/*
// example : same window function like open close hide ....
win1.open( call_back_function ); 
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