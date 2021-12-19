const wholeWin = document.createElement("div");
const winTitle = document.createElement("span");
// Adding a new element when clicking an icon 
// (hence spawning a new window)
function spawnWindow(){
    document.body.appendChild(wholeWin);
    wholeWin.style.height = '400px';
    wholeWin.style.width = '400px';
    wholeWin.style.position = 'absolute';
    wholeWin.style.top = '30%';
    wholeWin.style.left = '15%';
    
    wholeWin.setAttribute('class', 'windowWrapper');
    wholeWin.setAttribute('id', 'windowTest');
    const winTitleBar = document.createElement("header");
    wholeWin.appendChild(winTitleBar);

    winTitleBar.setAttribute('class', 'win_title_bar');
    winTitleBar.setAttribute('id', 'window_title_bar');
    
    const winIcon = document.createElement("img");
    winTitleBar.appendChild(winIcon);

    winIcon.setAttribute('class', 'icon title_icon');
    winIcon.setAttribute('src', './graphics/folder_open.png');
    winIcon.setAttribute('alt', 'icon');
    winIcon.setAttribute('draggable', 'false');
    
    winTitleBar.appendChild(winTitle);

    winTitle.setAttribute('class', 'title');
    winTitle.innerHTML = 'Window Title';

    const winCloseIcon = document.createElement("img");
    winTitleBar.appendChild(winCloseIcon);
    winCloseIcon.setAttribute('class', 'icon minimize_button window_title_button');
    winCloseIcon.setAttribute('src', './graphics/window_close.png');
    winCloseIcon.setAttribute('alt', 'close');
    winCloseIcon.setAttribute('draggable', 'false');
    winCloseIcon.setAttribute('onclick', 'killWindow("' + wholeWin.id + '"), killWindowIcon("taskbar_win_icon")');


    const winMaxIcon = document.createElement("img");
    winTitleBar.appendChild(winMaxIcon);
    winMaxIcon.setAttribute('class', 'icon minimize_button window_title_button');
    winMaxIcon.setAttribute('src', './graphics/window_max.png');
    winMaxIcon.setAttribute('alt', 'maximize');
    winMaxIcon.setAttribute('draggable', 'false');
    winMaxIcon.setAttribute('onclick', 'maxWindowToggle("' + wholeWin.id + '")');

    const winMinIcon = document.createElement("img");
    winTitleBar.appendChild(winMinIcon);
    winMinIcon.setAttribute('class', 'icon minimize_button window_title_button');
    winMinIcon.setAttribute('src', './graphics/window_min.png');
    winMinIcon.setAttribute('alt', 'minimize');
    winMinIcon.setAttribute('draggable', 'false');
    winMinIcon.setAttribute('onclick', 'minWindow("' + wholeWin.id + '")');

    const winBody = document.createElement("div");
    wholeWin.appendChild(winBody);

    winBody.setAttribute('class', 'full_container');
    spawnTaskbarIcon();
}

// Create Taskbar icon foreach open window
const barIcon = document.createElement('div');
function spawnTaskbarIcon(){
    const taskbar = document.getElementById('taskbar');
    taskbar.appendChild(barIcon);
    barIcon.setAttribute('class', 'application_in_taskbar');
    barIcon.setAttribute('id', 'taskbar_win_icon');
    barIcon.setAttribute('onclick', 'minWindowToggle("' + wholeWin.id + '")');
    
    const barIconImage = document.createElement('img');
    barIcon.appendChild(barIconImage);
    barIconImage.setAttribute('class', 'app_icon');
    barIconImage.setAttribute('src', './graphics/folder_open.png');
    barIconImage.setAttribute('draggable', 'false');
    barIconImage.setAttribute('alt', 'app_icon');
    
    const barIconText = document.createElement('p');
    barIcon.appendChild(barIconText);
    barIconText.setAttribute('class', 'app_name');
    barIconText.innerHTML = winTitle.innerHTML;
}
