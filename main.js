function checkGameLevel() {
    var levelEntry = Number(document.getElementById('enter').value);

        switch (levelEntry) {
            case 1: document.getElementById("tixt").innerHTML="Level: Easy Mode";
            break;

            case 2: document.getElementById("tixt").innerHTML="Level: Normal Mode";
            break;

            case 3: document.getElementById("tixt").innerHTML="Level: Difficult Mode";
            break;

            default:
                window.alert("Invalid Section Number");
        }
}