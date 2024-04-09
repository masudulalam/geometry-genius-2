// function calculateEllipseArea () {
//     // get ellipse a value
//     const ellipseAinput = document.getElementById('ellipse-a');
//     const ellipseAtext = ellipseAinput.value;
//     const a = parseFloat(ellipseAtext);
//     console.log(a);

//     // get ellipse b value
//     const ellipseBinput = document.getElementById('ellipse-b');
//     const ellipseText = ellipseBinput.value;
//     console.log(ellipseText);
//     const ellipseB = parseFloat(ellipseText);

//     // calculate ellipse area
//     const area = 3.14 * a * b;
//     // console.log(area);

//     // display ellipse area
//     document.getElementById('display-ellipse-area').innerText = area;
// }


function calculateEllipseArea(){
    const a = getInputValueById('ellipse-a');
    // console.log(a);
    const b = getInputValueById('ellipse-b');
    // console.log(b);

    const area = 3.14 * a * b;

    setInnerTextById('display-ellipse-area', area)
}

function getInputValueById (inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById (elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}