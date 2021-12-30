// window class , general class you can import it and using it in another places  


export class window {

    // new window arguments 
    constructor (
        id = "defWindow" , x = 10, y = 10 , height = 512, width = 512 , 
        title = "window", focus = true , maximise_button = true , minimise_button = true , 
        maximise = false , minimise = true, hidden = false
    ){
        this.id = id;
        this.icon_id = "window_icon_" + this.id;
        this.x = x;
        this.y = y;

        this.height = height;
        this.width  = width;
        this.title  = title;

        // in case you want window with "maximise & minimise" buttons
        this.maximise = maximise;
        this.minimise = minimise;
        this.hidden   = hidden;

        // the actual "maximise minimise" window controller
        this.maximise_button = maximise_button;
        this.minimise_button = minimise_button;

        // resize object => in case you want that window to be resizable in "top down"/"right left" or all
        this.resizable = {
        td : true, // top down
        lr : true  // right left 
        };

        this.focus = focus;

        this.dom = null;

        // defualt css variable for all window elements
        this.css  = {
            window : {
                bg_color_foucs   : "rgb(0, 85, 229)",
                bg_color_nofoucs : "rgb(122, 153, 227)",
                raduis : "0.8vh 0.8vh 0vh 0vh"
            }
            
        } 

        // generate function is the responsible for making a new window with all it's component/elements
        // generate function return true if it's successed generating window otherwise return will be false
        this.generate = () => {
            
            // in case any element is already with that window id 
            let isAlreadyExist = document.querySelector(`#${this.id}`);

        if(isAlreadyExist == null || isAlreadyExist == undefined){
            // Creating window components
            let window = document.createElement("div");
            let winTitle = document.createElement("span");
            let winTitleBar = document.createElement("div");
            let winTitleIcon = document.createElement("img");
            let winIcons = document.createElement("span");
            let winCloseIcon = document.createElement("img");
            let winMinIcon = document.createElement("img");
            let winMaxIcon = document.createElement("img");
            let winBody = document.createElement("div");

            // setup "window" ==============================
            // set CSS
            window.style.cssText = `
                position : 'absolute';
                height : ${this.height}px;
                width  : ${this.width }px;
                top  : ${this.x}px;
                left : ${this.y}px;
                transition : '1s ease-in';
            `
            // set Attributes
            window.setAttribute('class', 'windowWrapper');
            window.setAttribute('id', this.id);
            // ==============================================


            // setup "Window title bar" =====================
            // set Attributes
            winTitleBar.setAttribute('class', 'win_title_bar');
            winTitleBar.setAttribute('id', 'window_title_bar');

            // icon (the top left icon)
            winTitleBar.appendChild(winTitleIcon);
            winTitleIcon.setAttribute('class', 'icon title_icon');
            winTitleIcon.src = './graphics/folder_open.png';
            winTitleIcon.setAttribute('alt', 'icon');
            winTitleIcon.setAttribute('draggable', 'false');

            // title
            winTitleBar.appendChild(winTitle);
            winTitle.setAttribute('class', 'title');
            // set window title
            winTitle.textContent = this.title;
            // ==============================================

            
            // setup "Window minimize button" ===============
            // if window has minimize ability
            if(this.minimise_button){

                winMinIcon.setAttribute('class', 'icon win_title_button');
                winMinIcon.src = './graphics/window_min.png';
                winMinIcon.setAttribute('alt', 'minimize');
                winMinIcon.setAttribute('draggable', 'false');

                // add click event when user click on it
                winMinIcon.addEventListener('click', function(){
                    /* 
                        minimize function logic need to be here
                    */
                    console.warn("minimise button working !");
                });

                // push this element to title bar
                winTitleBar.appendChild(winMinIcon);
            }
            // ==============================================


            // setup "Window maximize button" ===============
            // if window has maximize ability
            if(this.maximise_button){

                    winMaxIcon.setAttribute('class', 'icon win_title_button');
                    winMaxIcon.src = './graphics/window_max.png';
                    winMaxIcon.setAttribute('alt', 'maximize');
                    winMaxIcon.setAttribute('draggable', 'false');

                    // add click event when user click on it
                    winMaxIcon.addEventListener('click', () => {
                        
                        // toggling between maximize & minimize;
                        if( !this.maximise ){

                            this.maximizeWindow();
                            this.maximise = true; 
                            this.minimise = false; 

                        }
                        else{

                            this.minimiseWindow();
                            this.minimise = true; 
                            this.maximise = false; 

                        }

                        console.log("max " , this.maximise);
                        console.log("min " , this.minimise);
                        console.log("=======================");

                    });
                    
                    // push this element to title bar
                    winTitleBar.appendChild(winMaxIcon);
                }
                // ==============================================


                // setup "Window close button" ===============
                // setup close button
                    winCloseIcon.setAttribute('class', 'icon win_title_button');
                    winCloseIcon.src = './graphics/window_close.png';
                    winCloseIcon.setAttribute('alt', 'close');
                    winCloseIcon.setAttribute('draggable', 'false');

                    // add click event when user click on it
                    winCloseIcon.addEventListener('click', function(){
                        /* 
                            close function logic need to be here
                        */
                        console.warn("close button working ! ");
                    });

                    // push this element to title bar
                    winTitleBar.appendChild(winCloseIcon);
                // ==============================================

                // window composing

                // Isolating the window icons
                winIcons.appendChild(winMinIcon);
                winIcons.appendChild(winMaxIcon);
                winIcons.appendChild(winCloseIcon);

                // push win title bar to window
                window.appendChild(winTitleBar);
                // push window to the body
                document.body.appendChild(window);

                winIcons.setAttribute('class', 'win_action_icons');
                winTitleBar.appendChild(winIcons);

                // Window body
                window.appendChild(winBody);
                winBody.setAttribute('class', 'full_container');
                spawnTaskbarIcon(this.id, this.icon_id);

                /*
                    as last step we storing essential window elements in "dom" object 
                    for future usage
                */ 
                this.dom = document.querySelector(`#${this.id}`);

                // confirmation => success operation
                return true;
            }
            // in case window or any element exist with the same id 
            else{
                // exception message and , none generated window
                console.exception(`generating window was unsuccessful because reserved element exist with the same id ${this.id} `);
                // confirmation => unsuccess operation
                return false;
            }
        }

        // function make window visible if possible
        this.show = () => {
           
            // generte window using function generat
            // and getting result of that operation
            let output = this.generate();

            // in case response from "output" true
            if(output){

                // window maximize or minimze depend on 
                if( this.maximise ){

                    this.maximizeWindow();
                    this.maximise = true; 
                    this.minimise = false; 

                }
                else{

                    this.minimiseWindow();
                    this.minimise = true; 
                    this.maximise = false; 
                    
                }

                console.log("max " , this.maximise);
                console.log("min " , this.minimise);

            }
            // in case error happend in during generate
            else {
                console.exception("cannot make window visible , possible error happened during generate window");
            }
        }
        
        // this function maximize window
        this.maximizeWindow = () => {  

            // if dom of this window is available
            if(this.dom != null && this.dom != undefined) {

                this.dom.style.cssText = `
                        height : calc(100% - 6vh);
                        width : 100%;
                        top : 0px;
                        left : 0px;
                        transition : .3s ease;
                        border-radius : 0px;
                `;
  
            } 
            // else mean something happed or window not available currently
            else{ 
                console.warn(`cannot maximize window currently !`);
            }

        }

        // this function minimize window
        this.minimiseWindow = () => {

            // if dom of this window is available
            if(this.dom != null && this.dom != undefined){

                this.dom.style.cssText = `
                height : ${this.height}px;
                width : ${this.width}px;
                top : ${this.y}px;
                left : ${this.x}px;
                border-raduis : 0.8vh 0.8vh 0vh 0vh;
                transition : .3s ease;
                `;

            }
            // else mean something happed or window not available ==> error message explian currently
            else{ 
                console.warn(`cannot minimize window currently !`);
            }
        }

        } // end of constructor

} // end of class