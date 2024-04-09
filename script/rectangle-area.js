function calculateRectangleArea () {
    // get rectangle width
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const rectangleWidth = parseFloat(rectangleWidthText);
    // console.log(typeof rectangleWidth, rectangleWidth);

    // get rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-height');
    const rectangleLengthText = rectangleLengthInput.value;
    const rectangleLength = parseFloat(rectangleLengthText);
    // console.log(rectangleLength); 

    // calculate rectangle area
    const rectangleArea = rectangleWidth * rectangleLength;
    console.log(rectangleArea);

    // display rectangle area
    document.getElementById('display-rectangle-area').innerText = rectangleArea;
}