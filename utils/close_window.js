// kill window process
// (In this case removing the HTML node from DOM)
function killWindow(id){
    let window = document.getElementById(id);
    window.parentNode.removeChild(window);
}
// kill window icon in the taksbar
function killWindowIcon(id){
    let winIcon = document.getElementById(id);
    winIcon.parentNode.removeChild(winIcon);
}
// kill notification message
function killNotif(){
    let notifMsg = document.getElementById('notif_container');
    notifMsg.parentNode.removeChild(notifMsg);
}