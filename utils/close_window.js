// kill window process
// (In this case removing the HTML node from DOM)
function killWindow(id){
    var window = document.getElementById(id);
    window.parentNode.removeChild(window);
}
// kill window icon in the taksbar
function killWindowIcon(id){
    var winIcon = document.getElementById(id);
    winIcon.parentNode.removeChild(winIcon);
}
// kill notification message
function killNotif(){
    var notifMsg = document.getElementById('notif_container');
    notifMsg.parentNode.removeChild(notifMsg);
}