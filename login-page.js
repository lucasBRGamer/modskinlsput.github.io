const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

localStorage.setItem("winner", "fehtheworld#9360");

var sem_nivel = "https://cdn.discordapp.com/emojis/946445227609165925.png?size=80";
var nivel_1 = "https://cdn.discordapp.com/emojis/945768989198532708.png?size=80";
var nivel_2 = "https://cdn.discordapp.com/emojis/945769010899861554.png?size=80";
var nivel_3 = "https://cdn.discordapp.com/emojis/945769038280278056.png?size=80";
var nivel_4 = "https://cdn.discordapp.com/emojis/945769155607552030.png?size=80";
var nivel_5 = "https://cdn.discordapp.com/emojis/945769222582206534.png?size=80";
var nivel_6 = "https://cdn.discordapp.com/emojis/945769259194265640.png?size=80";
var nivel_7 = "https://cdn.discordapp.com/emojis/945769293906321438.png?size=80";
var sequencia_0 = "https://cdn.discordapp.com/emojis/946444972356411472.png?size=80";
var sequencia_1 = "https://cdn.discordapp.com/emojis/945769435183083570.png?size=80";
var sequencia_2 = "https://cdn.discordapp.com/emojis/945769435497648238.png?size=80";
var sequencia_3 = "https://cdn.discordapp.com/emojis/945769435552165958.png?size=80";
var sequencia_4 = "https://cdn.discordapp.com/emojis/945769585024593920.png?size=80";
var sem_ranked = "https://cdn.discordapp.com/emojis/946504906796331088.png?size=80";
var ranked_bronze = "https://cdn.discordapp.com/emojis/945787021534851092.png?size=80";
var ranked_prata = "https://cdn.discordapp.com/emojis/945787021086052422.png?size=80";
var ranked_ouro = "https://cdn.discordapp.com/emojis/945787019622252604.png?size=80";
var ranked_platina = "https://cdn.discordapp.com/emojis/945787022201741352.png?size=80";
var ranked_diamante = "https://cdn.discordapp.com/emojis/945787022168195162.png?size=80";
var ranked_mestre = "https://cdn.discordapp.com/emojis/945787021861986407.png?size=80";
var ranked_desafiante = "https://cdn.discordapp.com/emojis/945787022688276520.png?size=80";
var cargo_dev = "https://cdn.discordapp.com/emojis/946447648011993178.png?size=80";
var cargo_mod = "https://cdn.discordapp.com/emojis/946447648410468492.png?size=80";
var cargo_supp = "https://cdn.discordapp.com/emojis/946447648464994405.png?size=80";
var cargo_tester = "https://cdn.discordapp.com/emojis/946447648062337034.png?size=80";
var cargo_corretor = "https://cdn.discordapp.com/emojis/946447647982645278.png?size=80";
var cargo_designer = "https://cdn.discordapp.com/emojis/946447647886159963.png?size=80";
var imune = "hidden";
var risco = "hidden";

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const urlhref = "https://modskinbr.github.io/L.S.P.-UT/testers-logged.html"

    if (username === "Porito#0000" && password === "0000") {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("userdate_img", "https://cdn.discordapp.com/avatars/730986876554706944/541dad7951a9572759e0b1ef8639e385.png");
        localStorage.setItem("points", "Imune");
        localStorage.setItem("level_points", "Imune");
        localStorage.setItem("level_points_img", sem_nivel);
        localStorage.setItem("sequence", "Imune");
        localStorage.setItem("sequence_img", sequencia_0);
        localStorage.setItem("points_mitics", "Imune");
        localStorage.setItem("ranked_mitico_img", sem_ranked);
        localStorage.setItem("ranked_mitico", "Imune");
        localStorage.setItem("imune", "revert");
        localStorage.setItem("risco", "hidden");
        localStorage.setItem("cargo_img", cargo_dev);
        localStorage.setItem("cargo", "Dev");
    }
    else if (username === "Kawai Foxy#3471" && password === "21665") {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("userdate_img", "https://cdn.discordapp.com/avatars/389760061603446784/ff535dfc3970c46c691cf96c368cb71a.png");
        localStorage.setItem("points", "122");
        localStorage.setItem("level_points", "2");
        localStorage.setItem("level_points_img", nivel_2);
        localStorage.setItem("sequence", "0");
        localStorage.setItem("sequence_img", sequencia_0);
        localStorage.setItem("points_mitics", "0");
        localStorage.setItem("ranked_mitico_img", sem_ranked);
        localStorage.setItem("ranked_mitico", "Sem Ranked");
        localStorage.setItem("imune", "hidden");
        localStorage.setItem("risco", "hidden");
        localStorage.setItem("cargo_img", cargo_supp);
        localStorage.setItem("cargo", "Supp");
    } 
    else if (username === "' gece ✪#9960" && password === "94545") {
        location.href = urlhref;
        localStorage.setItem("userdate", username);
        localStorage.setItem("validate", password);
        localStorage.setItem("userdate_img", "https://cdn.discordapp.com/avatars/536698625338900527/e88962486f4cc2675d43d325e343a7d8.png");
        localStorage.setItem("points", "125");
        localStorage.setItem("level_points", "2");
        localStorage.setItem("level_points_img", nivel_2);
        localStorage.setItem("sequence", "0");
        localStorage.setItem("sequence_img", sequencia_0);
        localStorage.setItem("points_mitics", "0");
        localStorage.setItem("ranked_mitico_img", sem_ranked);
        localStorage.setItem("ranked_mitico", "Sem Ranked");
        localStorage.setItem("imune", "hidden");
        localStorage.setItem("risco", "hidden");
        localStorage.setItem("cargo_img", cargo_mod);
        localStorage.setItem("cargo", "Mod");
    } 
    else {
        loginErrorMsg.style.opacity = 1;
        localStorage.clear();
    }
})
