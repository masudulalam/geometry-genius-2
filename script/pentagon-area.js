function calculatePentagonArea () {
    // get pentagon base value
    const pentagonPInput = document.getElementById('pentagon-p');
    const pentagonPText = pentagonPInput.value;
    const p = parseFloat(pentagonPText);
    console.log(p);

    // get pentagon height value
    const pentagonBInput = document.getElementById('pentagon-b');
    const pentagonBText = pentagonBInput.value;
    const b = parseFloat(pentagonBText);
    // console.log(b);

    // calculate pentagon area
    const area = 0.5 * p * b;
    // console.log(area);

    // display pentagon area
    document.getElementById('display-pentagon-area').innerText = area;
}