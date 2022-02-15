
import {window} from "./window/window.js";

export class virtualOS{

    constructor(window_html = ``, window_css = ``){

        this.templates = {
            window : {
                html : window_html,
                css  : window_css,
            },

            taskBar : {
                html : null,
                css  : null
            }
        }

        // where we insert a new window 
        this.wins = [];

        // function for parse html templates to html elements
        this.parseHTML = (html_template = "") => {
            
            // try to parse template
            let parser = new DOMParser();
                parser = parser.parseFromString(html_template,"text/html");

            // return data
            return parser.body.firstElementChild;

        }

        // try parse window html
        this.templates.window.html = this.parseHTML(this.templates.window.html);

        // main window class for building window's
        this.window = window;

        // make new window 
        this.new_window = (
            // parameters for new window
            id = "defWindow" , title = "window" , window_color = "rgb(0,85,229)", 
            x = 10, y = 10 , height = 512, width = 512 , 
            focus = true , maximise_button = true , minimise_button = true , 
            maximise = false , minimise = true, visible = true , where = document.body
        ) => {

            let new_window = new this.window( 
                id, title , window_color , x, y , height , width, focus, 
                maximise_button, minimise_button, maximise, minimise, visible, where , this.templates.window.html
            );
        
            new_window.struct.html.setAttribute("id" , "os_id_" + this.wins.length+1);
            this.wins.push(new_window);

            return new_window;
        } 
        
        // define window style in head 
        document.head.insertAdjacentHTML("beforeend" , `<style>${this.templates.window.css}</style>`)
    }

}