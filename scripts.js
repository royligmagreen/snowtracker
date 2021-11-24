var latestBalance = 0;
var MIM_value = 0;
var WAVAX_value = 0;
var snowtraceKey = ""
setInterval(function () {

    //MIM api call
    $.ajax({
        type: "GET",
        url: "https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0x130966628846bfd36ff31a822705796e8cb8c18d" +
            "&address=0xa3F1F5076499EC37D5BB095551f85ab5a344BB58&tag=latest&apikey="
            + snowtraceKey,
        datatype: "html",
        success: function (data) {
            var result = data.result;
            var choppedResult = result.slice(0, 7);
            MIM_value = choppedResult;
            console.log(choppedResult);
            var audio = document.getElementById("myAudio");
            if (choppedResult > 13000000) {
                audio.play();
            }
        }
    });

    //WAVAX api call
    $.ajax({
        type: "GET",
        url: "https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7" +
            "&address=0x199A76543E7582Bb780D27553A5E88D8ed948DC0&tag=latest&apikey=" +
            + snowtraceKey
        ,
        datatype: "html",
        success: function (data) {
            var result = data.result;
            var choppedResult = result.slice(0, 3);
            WAVAX_value = choppedResult;
            console.log(choppedResult);
            var audio = document.getElementById("myAudio");
            if (choppedResult > 45000) {
                audio.play();
            }
        }
    });
    // console.log(snowtraceKey)
    document.getElementById("mimBalance").innerHTML = `${MIM_value}`;
    document.getElementById("wavaxBalance").innerHTML = `${WAVAX_value}`;



}, 1500);

function submitApiKey() {
    snowtraceKey = document.getElementById("inputKey").value
    console.log(snowtraceKey)
}