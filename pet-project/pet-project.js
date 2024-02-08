window.onload = function () {

    //set empty values for user responses
    var L1selection = "";
    var L2selection = "";
    var L3selection = "";

    //get the neccessary info from the html file
    var levelHeading = document.getElementById("level-heading");
    var option1 = document.getElementById("option1");
    var option1text = document.getElementById("option1text");
    var option2 = document.getElementById("option2");
    var option2text = document.getElementById("option2text");
    var instructions = document.getElementById("instructions");

    //set the quiz level
    var currentLevel = 1;

    //add onclick event listeners based on the current level
    function updateEventListeners() {
        if (currentLevel === 1) {
            option1.onclick = salty;
            option2.onclick = sweet;
        } else if (currentLevel === 2) {
            option1.onclick = soft;
            option2.onclick = crunchy;
        } else if (currentLevel === 3) {
            option1.onclick = healthy;
            option2.onclick = unhealthy;
        }
    }

    //setup of event listeners
    updateEventListeners();

    //functions that switches the quiz contents to level2
    function salty() {
        currentLevel = 2;
        levelHeading.innerHTML = "LEVEL 2";
        option1.innerHTML = "<img src='./images/soft.png'width='300' height='200'</img><p>SOFT</p>";
        option1text.innerHTML = "SOFT";
        option2.innerHTML = "<img src='./images/crunchy.png'width='300' height='200'></img><p>CRUNCHY</p>";
        option2text.innerHTML = "CRUNCHY";
        L1selection = "salty";
        updateEventListeners();
    }

    function sweet() {
        currentLevel = 2;
        levelHeading.innerHTML = "LEVEL 2";
        option1.innerHTML = "<img src='./images/soft.png'width='300' height='200'</img><p>SOFT</p>";
        option1text.innerHTML = "SOFT";
        option2.innerHTML = "<img src='./images/crunchy.png'width='300' height='200'></img><p>CRUNCHY</p>";
        option2text.innerHTML = "CRUNCHY";
        L1selection = "sweet";
        updateEventListeners();
    }

    //functions that switches the quiz contents to level3
    function soft() {
        currentLevel = 3;
        levelHeading.innerHTML = "LEVEL 3";
        option1.innerHTML = "<img src='./images/healthy.png'width='300' height='200'</img><p>HEALTHY</p>";
        option1text.innerHTML = "HEALTHY";
        option2.innerHTML = "<img src='./images/unhealthy.jpg'width='300' height='200'></img><p>UNHEALTHY</p>";
        option2text.innerHTML = "HEALTHY";
        L2selection = "soft";
        updateEventListeners();
    }

    function crunchy() {
        currentLevel = 3;
        levelHeading.innerHTML = "LEVEL 3";
        option1.innerHTML = "<img src='./images/healthy.png'width='300' height='200'</img><p>HEALTHY</p>";
        option1text.innerHTML = "HEALTHY";
        option2.innerHTML = "<img src='./images/unhealthy.jpg'width='300' height='200'></img><p>UNHEALTHY</p>";
        option2text.innerHTML = "UNHEALTHY";
        L2selection = "crunchy";
        updateEventListeners();
    }

    //functions that switches the quiz contents to final recommendation
    function healthy() {
        currentLevel = 4;
        L3selection = "healthy";
        updateEventListeners();
        finalSnack();
    }

    function unhealthy() {
        currentLevel = 4;
        L3selection = "unhealthy";
        updateEventListeners();
        finalSnack();
    }

    //final recommendation logic
    function finalSnack() {
        if (L1selection === "salty" && L2selection === "soft" && L3selection === "healthy") {
            levelHeading.innerHTML = "FINAL RESULT";
            instructions.innerHTML = "Your final snack recommendation is: Edamame!";
            option1.style.display = "none";
            option1text.style.display = "none";
            option2.style.display = "none";
            option2text.style.display = "none";
        } else if (L1selection === "salty" && L2selection === "soft" && L3selection === "unhealthy") {
            levelHeading.innerHTML = "FINAL RESULT";
            instructions.innerHTML = "Your final snack recommendation is: Pizza Rolls!";
            option1.style.display = "none";
            option1text.style.display = "none";
            option2.style.display = "none";
            option2text.style.display = "none";
        } else if (L1selection === "salty" && L2selection === "crunchy" && L3selection === "healthy") {
            levelHeading.innerHTML = "FINAL RESULT";
            instructions.innerHTML = "Your final snack recommendation is: Mixed Nuts!";
            option1.style.display = "none";
            option1text.style.display = "none";
            option2.style.display = "none";
            option2text.style.display = "none";
        } else if (L1selection === "salty" && L2selection === "crunchy" && L3selection === "unhealthy") {
            levelHeading.innerHTML = "FINAL RESULT";
            instructions.innerHTML = "Your final snack recommendation is: Potato Chips!";
            option1.style.display = "none";
            option1text.style.display = "none";
            option2.style.display = "none";
            option2text.style.display = "none";
        } else if (L1selection === "sweet" && L2selection === "soft" && L3selection === "healthy") {
            levelHeading.innerHTML = "FINAL RESULT";
            instructions.innerHTML = "Your final snack recommendation is: Yogurt!";
            option1.style.display = "none";
            option1text.style.display = "none";
            option2.style.display = "none";
            option2text.style.display = "none";
        } else if (L1selection === "sweet" && L2selection === "soft" && L3selection === "unhealthy") {
            levelHeading.innerHTML = "FINAL RESULT";
            instructions.innerHTML = "Your final snack recommendation is: Brownies!";
            option1.style.display = "none";
            option1text.style.display = "none";
            option2.style.display = "none";
            option2text.style.display = "none";
        } else if (L1selection === "sweet" && L2selection === "crunchy" && L3selection === "healthy") {
            levelHeading.innerHTML = "FINAL RESULT";
            instructions.innerHTML = "Your final snack recommendation is: Granola Bars!";
            option1.style.display = "none";
            option1text.style.display = "none";
            option2.style.display = "none";
            option2text.style.display = "none";
        } else if (L1selection === "sweet" && L2selection === "crunchy" && L3selection === "unhealthy") {
            levelHeading.innerHTML = "FINAL RESULT";
            instructions.innerHTML = "Your final snack recommendation is: Toffee!";
            option1.style.display = "none";
            option1text.style.display = "none";
            option2.style.display = "none";
            option2text.style.display = "none";
        }
    }
}