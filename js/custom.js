
var status = 0;

$(document).ready(function () {

    $('input').val('');

    $(":checkbox").removeAttr("checked");

    $('area').click(function () {

        fillBTSTextBox($(this).attr('title'), $(this).attr('id'));

        return false;

    });

    $('#btn-go').click(priceCalculation);

})

function fillBTSTextBox(title, id) {

    if (status == 0) {

        $('#Start').val(title);
        $('#h-Start').val(id);
        
        status = 1;

    } else {

        $('#End').val(title);
        $('#h-End').val(id);
        status = 0; 
    }

}

function clearBTSTextBox() {
    document.getElementById("BTSTextBox").reset();
}

function priceCalculation() {

    var start = $('#h-Start').val();
    var end = $('#h-End').val();

    start = start.slice(-2);
    start = Number(start);

    //or use parseInt()

    end = end.slice(-2);
    end = Number(end);

    var stationsTravelled = Math.abs(end - start);
    var result = ((-0.1313 * (stationsTravelled * stationsTravelled)) + (4.991 * (stationsTravelled)) + 14.354);


    //variable for testing purposes
    //var start = 
    //var test = start;

    $('#priceOutput').val(result);

}

function showMoreOptions() {
    // Get the checkbox
    var toggleMoreOptions = document.getElementById("moreOptions");
    // Get the output text
    var text = document.getElementById("otherTransportation");

    // If the checkbox is checked, display the output text
    if (toggleMoreOptions.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
} 

function sumPrices() {

    var Motorcycle = Number(document.getElementById("Motorcycle").value);
    var Bus = Number(document.getElementById("Bus").value);

    //var result = Number($('#priceOutput').val) + Motorcycle + Bus;

    $('#Total').val(Motorcycle + Bus + (Number($('#priceOutput').val())));


}

// Place any jQuery/helper plugins in here.
