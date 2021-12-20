// Generate random ID
function generateId(length){
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// Creating window components
const wholeWin = document.createElement("div");
const winTitle = document.createElement("span");
const winTitleBar = document.createElement("div");
const winTitleIcon = document.createElement("img");
const winIcons = document.createElement("span");
const winCloseIcon = document.createElement("img");
const winMinIcon = document.createElement("img");
const winMaxIcon = document.createElement("img");
const winBody = document.createElement("div");
// Creating taskbar icon button
const barIcon = document.createElement('div');
const barIconText = document.createElement('p');
const barIconImage = document.createElement('img');

// Generating a new id each time
var randomWinId = generateId(2);
var randomIconId = generateId(2);

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
    const taskbar = document.getElementById('taskbar');
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
