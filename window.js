// window class , general class you can import it and using it in another places  


export class window {

    // new window arguments 
    constructor (
        id = "defWindow" , x = 10, y = 10 , height = 512, width = 512 , 
        title = "window", focus = true , maximise = true , minimise = true
    ){
        this.id = id;
        this.x = x;
        this.y = y;

        this.height = height;
        this.width  = width;
        this.title  = title;

        // in case you want window with "maximise & minimise" buttons
        this.maximise = maximise;
        this.minimise = minimise;

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

        this.spawnTaskbarIcon = function(winId = randomWinId, iconId = randomIconId){
            let taskbar = document.getElementById('taskbar');
            taskbar.appendChild(barIcon);
            barIcon.setAttribute('class', 'app_in_taskbar');
            barIcon.setAttribute('id', "" + iconId + "");
            barIcon.setAttribute('onclick', 'minWindowToggle(' + winId + ')');
            
            barIcon.appendChild(barIconImage);
            barIconImage.setAttribute('class', 'app_icon');
            barIconImage.setAttribute('src', './graphics/folder_open.png');
            barIconImage.setAttribute('draggable', 'false');
            barIconImage.setAttribute('alt', 'app_icon');
            
            barIcon.appendChild(barIconText);
            barIconText.setAttribute('class', 'app_name');
            barIconText.innerHTML = winTitle.innerHTML;
        }
        

        this.show = function(){

            // Creating window components
            let wholeWin = document.createElement("div");
            let winTitle = document.createElement("span");
            let winTitleBar = document.createElement("div");
            let winTitleIcon = document.createElement("img");
            let winIcons = document.createElement("span");
            let winCloseIcon = document.createElement("img");
            let winMinIcon = document.createElement("img");
            let winMaxIcon = document.createElement("img");
            let winBody = document.createElement("div");

            // Creating taskbar icon button
            let barIcon = document.createElement('div');
            let barIconText = document.createElement('p');
            let barIconImage = document.createElement('img');


            // Whole window
            document.body.appendChild(wholeWin);
            wholeWin.style.height = '400px';
            wholeWin.style.width = '400px';
            wholeWin.style.position = 'absolute';
            wholeWin.style.top = '30%';
            wholeWin.style.left = '15%';
            wholeWin.style.transition = '1s ease-in';
            wholeWin.setAttribute('class', 'windowWrapper');
            wholeWin.setAttribute('id', this.id);
            wholeWin.appendChild(winTitleBar);

            // Window title bar
            winTitleBar.setAttribute('class', 'win_title_bar');
            winTitleBar.setAttribute('id', 'window_title_bar');
            
            // Window title icon (the top left icon)
            winTitleBar.appendChild(winTitleIcon);
            winTitleIcon.setAttribute('class', 'icon title_icon');
            winTitleIcon.setAttribute('src', './graphics/folder_open.png');
            winTitleIcon.setAttribute('alt', 'icon');
            winTitleIcon.setAttribute('draggable', 'false');

            // Window title
            winTitleBar.appendChild(winTitle);
            winTitle.setAttribute('class', 'title');
            winTitle.innerHTML = 'Window Title';

            // Window minimize button
            winTitleBar.appendChild(winMinIcon);
            winMinIcon.setAttribute('class', 'icon win_title_button');
            winMinIcon.setAttribute('src', './graphics/window_min.png');
            winMinIcon.setAttribute('alt', 'minimize');
            winMinIcon.setAttribute('draggable', 'false');
            winMinIcon.setAttribute('onclick', 'minWindow(' + this.id + ')');

            // Window maximize button
            winTitleBar.appendChild(winMaxIcon);
            winMaxIcon.setAttribute('class', 'icon win_title_button');
            winMaxIcon.setAttribute('src', './graphics/window_max.png');
            winMaxIcon.setAttribute('alt', 'maximize');
            winMaxIcon.setAttribute('draggable', 'false');
            winMaxIcon.setAttribute('onclick', 'maxWindowToggle(' + this.id + ')');
            
            // Window close button
            winTitleBar.appendChild(winCloseIcon);
            winCloseIcon.setAttribute('class', 'icon win_title_button');
            winCloseIcon.setAttribute('src', './graphics/window_close.png');
            winCloseIcon.setAttribute('alt', 'close');
            winCloseIcon.setAttribute('draggable', 'false');
            winCloseIcon.setAttribute('onclick', 'killWindow(' + this.id + '), killWindowIcon('+ "window_icon_"+this.id +')');
            
            // Isolating the window icons
            winIcons.appendChild(winMinIcon);
            winIcons.appendChild(winMaxIcon);
            winIcons.appendChild(winCloseIcon);
            winIcons.setAttribute('class', 'win_action_icons');
            winTitleBar.appendChild(winIcons);

            // Window body
            wholeWin.appendChild(winBody);
            winBody.setAttribute('class', 'full_container');
            spawnTaskbarIcon(this.id, "window_icon_"+this.id);


            this.spawnTaskbarIcon();
        }

        
        }

}