// Generate random ID
function generateId(length){
    let result = '';
    let characters = '0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

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

// Generating a new id each time
let randomWinId = generateId(2);
let randomIconId = generateId(2);

// Adding a new element when clicking an icon 
// (hence spawning a new window)
function spawnWindow(winId = randomWinId, iconId = randomIconId){
    // Whole window
    document.body.appendChild(wholeWin);
    wholeWin.style.height = '400px';
    wholeWin.style.width = '400px';
    wholeWin.style.position = 'absolute';
    wholeWin.style.top = '30%';
    wholeWin.style.left = '15%';
    wholeWin.style.transition = '1s ease-in';
    wholeWin.setAttribute('class', 'windowWrapper');
    wholeWin.setAttribute('id', winId);
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
    winMinIcon.setAttribute('onclick', 'minWindow(' + winId + ')');

    // Window maximize button
    winTitleBar.appendChild(winMaxIcon);
    winMaxIcon.setAttribute('class', 'icon win_title_button');
    winMaxIcon.setAttribute('src', './graphics/window_max.png');
    winMaxIcon.setAttribute('alt', 'maximize');
    winMaxIcon.setAttribute('draggable', 'false');
    winMaxIcon.setAttribute('onclick', 'maxWindowToggle(' + winId + ')');
    
    // Window close button
    winTitleBar.appendChild(winCloseIcon);
    winCloseIcon.setAttribute('class', 'icon win_title_button');
    winCloseIcon.setAttribute('src', './graphics/window_close.png');
    winCloseIcon.setAttribute('alt', 'close');
    winCloseIcon.setAttribute('draggable', 'false');
    winCloseIcon.setAttribute('onclick', 'killWindow(' + winId + '), killWindowIcon('+ iconId +')');
    
    // Isolating the window icons
    winIcons.appendChild(winMinIcon);
    winIcons.appendChild(winMaxIcon);
    winIcons.appendChild(winCloseIcon);
    winIcons.setAttribute('class', 'win_action_icons');
    winTitleBar.appendChild(winIcons);

    // Window body
    wholeWin.appendChild(winBody);
    winBody.setAttribute('class', 'full_container');
    spawnTaskbarIcon(winId, iconId);
}

// Create Taskbar icon foreach open window
function spawnTaskbarIcon(winId = randomWinId, iconId = randomIconId){
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
