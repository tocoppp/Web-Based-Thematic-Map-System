var mini = true;

function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "175px";
    document.getElementById("mapCon").style.marginLeft = "175px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "85px";
    document.getElementById("mapCon").style.marginLeft = "85px";
    this.mini = true;
  }
}
