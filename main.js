
// main.js just a simple file for testing classes function & ....

import { desktop } from "../DesktopJS/Desktop-dev/desktop.js";
import { element } from "../DesktopJS/Desktop-dev/element.js";

const desk = new desktop("desk" , "./graphics/background.jpg");

let win = desk.new.window(
    "icc","computer",
    260,100,400,400,
    true,true,true,false,
    "./graphics/folder.png",
    true,true
).open();


let win1 = desk.new.window(
    "gcc","compiler",
    120,120,400,400,
    true,true,true,true,
    "./graphics/folder.png",
    true,false
).open();


win.on.resize.all( ( w , ev ) => {

    console.log( "ALLLL" , w.get.title()  , ev.clientX );

});


let e = new element("eid","TITLE","simple text",10,10,110,120);

    e.on.click(
        ( obj , event ) => console.warn("click_down !")
    );

    e.on.hover( 
        ( obj , event ) => {
            
            console.log("hover !" , obj.get.text() )

        } 
    );

/*

xwin.on.maximize( function(win , ev , p1) {

    console.warn("maximize : " , p1);

} , "param1" );

xwin.on.minimize( function(win , ev , p2) {

    console.warn("minimize : " , p2);

} , "param2" );


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