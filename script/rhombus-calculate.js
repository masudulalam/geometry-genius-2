function calculateRhombusArea () {
    // get rhombus diagonal1 value
    const rhombusDiagonal1Input = document.getElementById('diagonal-1');
    const rhombusDiagonal1Text = rhombusDiagonal1Input.value;
    const diagonal1 = parseFloat(rhombusDiagonal1Text);
    console.log(diagonal1);

    // get rhombus diagonal2 value
    const rhombusDiagonal2Input = document.getElementById('diagonal-2');
    const rhombusDiagonal2Text = rhombusDiagonal2Input.value;
    const diagonal2 = parseFloat(rhombusDiagonal2Text);
    console.log(diagonal2);

    // calculate rhombus area
    const area = 0.5 * diagonal1 * diagonal2;
    console.log(area);

    // display rhombus area
    document.getElementById('display-rhombus-area').innerText = area;
}