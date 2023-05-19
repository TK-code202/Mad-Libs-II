$(document).ready(function() {
    $("#formOne").submit(function (event){
        const adjectiveInput = $("input#adjective").val();
        const accessoryInput = $("input#accessory").val();
        const placeInput = $("input#place").val();
        const personInput = $("input#person").val();
        const brandInput = $("input#brand").val();
        const itemsInput = $("input#items").val();
        const celebrityInput = $("input#celebrity").val();


        const words = [adjectiveInput, accessoryInput, placeInput, personInput, brandInput, itemsInput, celebrityInput ];

        $(".adjective").text(words[0]);
        $(".accessory").text(words[1]);
        $(".place").text(words[2]);
        $(".person").text(words[3]);
        $(".brand").text(words[4]);
        $(".items").text(words[5]);
        $(".celebrity").text(words[6]);

        words.forEach(function(word) {
            $(this).first().click(function() {
                alert("You entered " + word );
            });
        });

        // words.forEach((word) => {
        //     $(word).click(function() {
        //       alert("You entered " + word);
        //     });
        //   });

        // words.forEach(function(word) {
        //     document.querySelector(word).addEventListener('click', function() {
        //       alert("You entered " + word);
        //     });
        //   });
          



        $("#story").show();
   
        
        event.preventDefault();


    });
});