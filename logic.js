function calculate() {

    name1 = document.getElementById('your').value;
    bandi = document.getElementById('crush').value;

    var lovedata = Math.random() * 100 + 1;
    lovedata = Math.floor(lovedata);


    if (lovedata > 70) {
        document.getElementById('output').value = name1 + " " + lovedata + "%, loves " + bandi + " , crazy lovers.";
    } 
    else if (lovedata < 70 && lovedata > 30) {
        document.getElementById('output').value = name1 + " " + lovedata + "%, loves " + bandi +" , average lovers.";
    }
     else {
        document.getElementById('output').value = name1 + " " + lovedata + "%, loves " + bandi + " , don't love.";
    }

}