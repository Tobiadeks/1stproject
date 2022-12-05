$(document).ready(()=>{
    $("#regbtn").click(function () {
        $("#regbtn").css(
            {"background-color":"#0B5ED7","color":"#fff"}
        )
        $("#logbtn").css(
            {"background-color":"#000","color":"#fff"}
        )
      $("#register").show(2000)
      $("#login").hide(2000)  
    })
    $("#logbtn").click(function() {
        $("#logbtn").css(
            {"background-color":"#0B5ED7","color":"#fff"}
        )
        $("#regbtn").css(
            {"background-color":"#000","color":"#fff"}
        )
        $("#login").show(2000)
        $("#register").hide(2000)
    })
})