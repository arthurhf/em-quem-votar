function carregamentoSuave(){
    $(document).ready(() => {
        let height = window.innerHeight;
        let width = window.innerWidth;
        $(".img-background").height(height);
        $(".img-background").width(width);
        $("body").fadeIn(1000);
    });
}

function toPresidentes(){
    $("#btnToPresidentes").click(function() {
        $("body").fadeOut("slow");
    });
}
