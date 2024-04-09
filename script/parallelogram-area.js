function calculateParallelogramArea () {
    // get base
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const parallelogramBase = parseFloat(parallelogramBaseText);
    // console.log(parallelogramBase);

    // get height
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const parallelogramHeight = parseFloat(parallelogramHeightText);
    // console.log(parallelogramHeight);

    // calculate Area
    const parallelogramArea = parallelogramBase * parallelogramHeight;
    // console.log(parallelogramArea);

    // display area
    document.getElementById('display-parallelogram-area').innerText = parallelogramArea;
}