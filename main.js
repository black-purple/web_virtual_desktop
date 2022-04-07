
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


const dtp = new desktop("desk");
      dtp.set.window.html(windowHTML);

let fwin = dtp.new.window("f_win","explorer",20,80,400,400,true,true,true,true);

let xwin = dtp.new.window("s_win","ps window",320,110,180,300,true,true,true);
let xwi = dtp.new.window("browser","browser",200,100,200,300,true,true,true,true,false);


xwi.on.drag( function(win , e){
    console.log( win.get.id() , e);
} );

console.log( xwi.get.resize_h() )

/*
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