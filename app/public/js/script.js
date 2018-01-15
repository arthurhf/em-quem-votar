function carregamentoSuave(){
    $(document).ready(() => {
        $("body").fadeIn(1000);
    });
}

function toPresidentes(){
    $("#btnToPresidentes").click(function() {
        $("body").fadeOut("slow");
    });
}
