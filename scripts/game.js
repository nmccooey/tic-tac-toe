jQuery(document).ready(function(){
    console.log("hellow")
    jQuery("#start-game-button").click(function(){
        jQuery("#intro-container").fadeToggle(1500);
    });
});