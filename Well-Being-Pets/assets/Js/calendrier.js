var img_source_1 = ["./assets/Img/Calendrier/page1.png", "./assets/Img/Calendrier/page2.png", "./assets/Img/Calendrier/page3.png", "./assets/Img/Calendrier/page4.png", "./assets/Img/Calendrier/page5.png"];
function ChangeSlide(sens) {

    event.preventDefault();
    if (sens <= 5){
      for(let i = 0;i<=5;i++){
        var border_reset = $(`#prev_img_slide_${i}`);
        border_reset.css("border", "0px solid #B2FFF8");
      }
    }
    document.getElementById("slide_img_1").src = img_source_1[sens];
    var border_insert = $(`#prev_img_slide_${sens}`);
    border_insert.css("border", "2px solid #B2FFF8");
}