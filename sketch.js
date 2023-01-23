var cnv;

function centerCanvas() { //keep canvas centered in window
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function setup() {
    cnv = createCanvas(600, 600);
    centerCanvas();
    background(200);
  }
  
  function windowResized() { //keep canvas centered if window resized
    centerCanvas();
  }

  function draw() {
    
    //justice clock
    textSize(52);
    fill(127,0,0);  
    textStyle(BOLD);
    textFont('Helvetica');
    text('TIME FOR JUSTICE', 70, 70);

    //stats sheet
    textSize(22);
    fill(255, 0, 0);  
    textStyle(NORMAL);
    textFont('Helvetica')
    textWrap(WORD);
    //citations: https://eji.org/issues/death-penalty/
    text('Mental health experts estimate at least 20% of people on death row today have a serious mental illness. (EJI)', 75, 100, 400);
    text('African Americans make up 41% of people on death row and 34% of those executed, but only 13% of the population is Black (EJI)', 200, 250, 350);
    text('For every eight people executed on death row, one person has been posthumously exonerated (EJI)', 50, 475, 550);

    let hourTallyY = height/3;
    let minuteTallyY = (height/3)*2;
    let secondTallyY = height-20;
  
    let hr = hour();
    let min = minute();
    let sec = second();
  
    let hourScale = (width-40)/23;
    let minuteScale = (width-40)/60;
    let secondScale = (width-40)/60;
    let padding = 20;
    let tallyHeight = 200; // increased the height of the tally marks
    let tallyWidth = 3;
  
    strokeWeight(tallyWidth);
    strokeCap(SQUARE);
  
    for (let i = 0; i < hr; i++) {
      fill(0);  
      if((i*hourScale)+padding < width-padding){
        line((i*hourScale)+padding, hourTallyY, (i*hourScale)+padding, hourTallyY-tallyHeight);
      }
    }
  
    for (let i = 0; i < min; i++) {
      fill(0);
      if((i*minuteScale)+padding < width-padding){
        console.log(min);
        line((i*minuteScale)+padding, minuteTallyY, (i*minuteScale)+padding, minuteTallyY-tallyHeight);
      }
    }

    for (let i = 0; i < sec; i++) {
        fill(0);
        if((i*secondScale)+padding < width-padding){
            fill(0);
            line((i*secondScale)+padding, secondTallyY, (i*secondScale)+padding, secondTallyY-tallyHeight);
        }

        if(sec >= 59){
            fill(200);
            rect(0, 0, 600, 600);
            fill(0);
        }    
    }
}