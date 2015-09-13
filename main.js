/**************************************
 * Shadows of Seven
 * Created on Saturday, September 12th, 2015
 * Made by Indie and his awesome partners
 * 
 * Thanks to KCF for the boilerplate on GitHub. Check out his programs here: https://www.khanacademy.org/profile/kingcodefish/
 * Want to join ____________? Simply go here: https://www.khanacademy.org/computer-programming/indies-collaboration-team/6679584874561536
 * 
 * Thank you SO MUCH Emory for his Disaster Studios logo. You are an amazing coder, like everyone else on KA. Check out his programs here: https://www.khanacademy.org/profile/DisasterStudios2/ 
 * 
 */

/* --- GLOBAL VARIABLES --- */
var gameStateNumber = 0;
var keys = [];
var mouseOverButton = "";

/* --- BUTTON FUNCTION --- */
var button = function(x, y, wid, hei, radius, tex, textSi, textFill, hoverTextFill, fi, hoverFi, stro, stroWei, hoverStro, hoverStroWei) {
    if(abs(x - mouseX) <= wid / 2 && abs(y - mouseY) <= hei / 2) {
        if(mouseIsPressed) {
            mouseOverButton = tex;
        }
        fill(hoverFi);
        stroke(hoverStro);
        strokeWeight(hoverStroWei);
    } else {
        fill(fi);
        stroke(stro);
        strokeWeight(stroWei);
    }
    rectMode(CENTER);
    rect(x, y, wid, hei, radius);
    if(abs(x - mouseX) <= wid / 2 && abs(y - mouseY) <= hei / 2) {
        fill(hoverTextFill);
    } else {
        fill(textFill);
    }
    textAlign(CENTER, CENTER);
    textSize(textSi);
    text(tex, x, y);
};

/* --- HOME SCREEN BACKDROP --- */
var homeScreenDrop = function(homeScrBackground) {
    background(255, 183, 0);

    var startColor = color(153, 23, 0);
    var endColor = color(204, 163, 0);
    var lineWidth = 4;
    strokeWeight(lineWidth);
    for (var i = 0; i <= height; i += lineWidth) {
        stroke(lerpColor(startColor, endColor, i / height));
        line(0, i, height, i);
    }

    noStroke();

    pushMatrix();
    translate(25, 47);
    fill(240, 240, 19);
    rect(20, 20, 87, 87);
    fill(239, 250, 85);
    rect(27, 27, 75, 75);
    fill(252, 252, 156);
    rect(39, 38, 50, 50);
    popMatrix();


    pushMatrix();
    translate(1, 142);
    noStroke();
    fill(89, 89, 89);
    rect(-3, 202, 402, 61);
    fill(89, 89, 89);
    rect(-2, 204, 53, -60);
    rect(55, 202, 42, -126);
    rect(102, 226, 42, -126);
    rect(140, 265, 64, -72);
    rect(154, 223, 50, -189);
    rect(55, 190, 42, -126);
    rect(81, 230, 42, -48);
    rect(207, 213, 54, -165);
    rect(268, 206, 42, -126);
    rect(300, 221, 50, -96);
    rect(255, 262, 42, -79);
    rect(365, 228, 42, -126);
    popMatrix();

};

/* --- SLIDES --- */
var menu = function() {
    textFont(createFont("Tahoma Bold"));
    rectMode(CORNER);
    background(0, 200, 200);
    noStroke();
    homeScreenDrop();
    fill(255, 255, 255);
    pushMatrix();
        translate(50, 120);
        rotate(-30);
        textSize(20 + sin(frameCount* 15) * 1.5);
        fill(255, 140, 140);
        text("WITH\nLOGO!!", 0, 0);
    popMatrix();
    fill(255, 0, 0, 125);
    rect(95, 26, 298, 124);
    fill(255, 255, 255);
    textSize(45);
    text("Shadows Of\nSeven", 245, 86);
    fill(255, 255, 255);
    stroke(0, 0, 0);
    rect(6, 164, 390, 30);
    textSize(20);
    fill(0, 0, 0);
    text("A GAME by Indie Productions", 201, 180);
    button(320, 250, 130, 33, 10, "Play", 24, color(0, 0, 0), color(82, 82, 82), color(255, 255, 255), color(200, 200, 200, 100), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
    button(320, 290, 130, 33, 10, "Options", 24, color(0, 0, 0), color(82, 82, 82), color(255, 255, 255), color(200, 200, 200, 100), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
    button(320, 330, 130, 33, 10, "Credits", 24, color(0, 0, 0), color(82, 82, 82), color(255, 255, 255), color(200, 200, 200, 100), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
    rectMode(CORNER);
    fill(0, 0, 0);
    noStroke();
    pushMatrix();
        rotate(11);
        rect(158, 202, 60, 60, 10);
        fill(255, 255, 255);
        ellipse(174, 230, 10, 10);
        ellipse(199, 230, 10, 10);
        fill(255, 0, 0);
        rect(158, 208, 60, 10);
        fill(255, 0, 0);
        translate(56, 142);
        triangle(97, 98, 102, 73, 88, 56);
    popMatrix();
    pushMatrix();
        rotate(11);
        translate(51, 177);
        fill(255, 255, 255);
        rect(30, 30, 60, 3);
        rect(30, 50, 45, 3);
        rect(30, 70, 60, 3);
    popMatrix();
    fill(0, 0, 0, 100);
    pushMatrix();
        translate(1, 267);
        triangle(0, 14, -2, 1038, 412, 103);
    popMatrix();
    pushMatrix();
        translate(-52, -54);
        triangle(52, 142, 457, 55, 50, 50);
    popMatrix();
}; // Draw the main menu screen in here, this is an example menu
var help = function() {
    rectMode(CORNER);
    homeScreenDrop();
    
    fill(0, 0, 0, 70);
    rect(0, 0, 400, 400);
    
    textSize(100);
    fill(255, 255, 255);
    text("Help", 201, 50);
    
    textSize(30);
    text("Write Text Here", 201, 201);
    
    button(70, 370, 130, 33, 10, "Back", 24, color(0, 0, 0), color(82, 82, 82), color(255, 255, 255), color(200, 200, 200, 100), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
};
var credits = function() {
    rectMode(CORNER);
    homeScreenDrop();
    
    fill(0, 0, 0, 70);
    rect(0, 0, 400, 400);
    
    textSize(100);
    fill(255, 255, 255);
    text("Credits", 201, 50);
    
    textSize(20);
    text("Thanks to my collab team for helping\nme design the game. Here is a list\nof the people who did:\nSatisifed Soul, KCF, codeWizard, Elijah,\nEmory, KingKhan007, Ignatio,\nJavaLava, Julian, Muhib Hussain,\nRobot and Fazbear! \n\nEveryone else is listed on the collab\nsite,", 201, 220);
    
    button(70, 370, 130, 33, 10, "Back", 24, color(0, 0, 0), color(82, 82, 82), color(255, 255, 255), color(200, 200, 200, 100), color(0, 0, 0, 100), 2, color(0, 0, 0, 100), 2);
};
var level01 = function() {
    background(0, 0, 0);
}; // Draw the first level in here

/* --- RENDERING AND INPUT --- */
keyPressed = function() {
    keys[keyCode] = true;
};
keyPressed = function() {
    keys[keyCode] = false;
};
mouseReleased = function() {
    switch(mouseOverButton) {
        case "Play": // Change this to correspond with the button text of the button you want to perform the action on.
            gameStateNumber = 3; // Do action here for the corresponding button.
            break; // Copy-and-paste more of the case...break scenarios if you want more button actions.
        case "Options":
            gameStateNumber = 1;
            break;
        case "Credits":
            gameStateNumber = 2;
            break;
        case "Back":
            gameStateNumber = 0;
            break;
    }
};

/* --- BEGINNING LOGO --- */
var txtColor1 = 0;
var loaded = false;
var time = 0;
var roundTri = function(ax, ay, bx, by, cx, cy, curvatureRadius, gBuf) {
    /* Handle the opted-out parameter */
    if (gBuf === undefined) {
        gBuf = this;
        if (! gBuf.beginDraw) {
            return;
        }
    }
    var ab = dist(ax, ay, bx, by);
    var bc = dist(bx, by, cx, cy);
    var ac = dist(ax, ay, cx, cy);
    /* Sanity check */
    if (curvatureRadius <= 0 || ab === 0 || bc === 0 || ac === 0) {
        /* Let Processingjs handle the degenerate case */
        gBuf.triangle(ax, ay, bx, by, cx, cy);
        return;
    }
    var p = [];  /* points array */
    p.push({
        x: ax,
        y: ay,
        next_dist: ab,  /* distance to the next tri point */
        dx: bx - ax,    /* signed delta x to next x coordinate */
        dy: by - ay,
        /* each point of the triangle has two associate vertices */
        next_x: 0,  /* coord along the line to next tri point */
        next_y: 0,
        prev_x: 0,  /* coord along the line to prev tri point */
        prev_y: 0
    });
    p.push({ x: bx, y: by, next_dist: bc,
        dx: cx - bx, dy: cy - by });
    p.push({ x: cx, y: cy, next_dist: ac,
        dx: ax - cx, dy: ay - cy });
    
    /*
     * Computes and sets the vertices around the
     * triangle point p[A].
     */
    var triVertex = function(A) {
        var d;
        var C = (A + 2) % 3;  /* "prev" triangle point's index */
        var theta = atan2(p[A].dy, p[A].dx);  /* x-axis to AB */
        var gamma = atan2(-p[C].dy, -p[C].dx);  /* x-axis to AC */
        var alpha = (gamma - theta);    /* measure of angle BAC */
        alpha /= 2;  /* measure of bisected angle BAC */
        var i = abs(curvatureRadius / sin(alpha));
        
        d = p[A].next_dist;
        p[A].next_x = p[A].x + i/d * p[A].dx;
        p[A].next_y = p[A].y + i/d * p[A].dy;
        
        d = p[C].next_dist;
        p[A].prev_x = p[A].x - i/d * p[C].dx;
        p[A].prev_y = p[A].y - i/d * p[C].dy;
    };
    
    /*
     * Now compute, then draw the vertices of the
     * rounded triangle
     */
    gBuf.beginShape();
    for (var i = 0; i < p.length; i++) {
        triVertex(i);
        gBuf.vertex(p[i].prev_x, p[i].prev_y);
        gBuf.bezierVertex(p[i].x, p[i].y, p[i].x, p[i].y,
            p[i].next_x, p[i].next_y);
    }
    gBuf.endShape(CLOSE);
};
var fire = function(x, y, s, a){
    var colors = [color(255, 0, 0), color(255, 64, 0), color(255, 128, 0), color(255, 192, 0), color(255, 255, 0)];
    noStroke();
    pushMatrix();
    translate(x, y);
    rotate(a);
    scale(s/10/3);
    for (var i = 0; i < 5; i++){
        fill(colors[i]);
        roundTri(-16+i, 0, -4-i, 0, -10, -10+i, 2);
        roundTri(-6+i, 0, 6-i, 0, 0, -10+i, 2);
        roundTri(4+i, 0, 16-i, 0, 10, -10+i, 2);
    }
    popMatrix();
}; // Fire function
var d = function(x, y, s){
    pushMatrix();
    
    translate(x, y);
    scale(s/180);
    noFill();
    // Make the D arc
    stroke(150, 124, 32);
    strokeWeight(20);
    arc(0, 0, 180, 180, -89, 90);
    // Make the D line
    strokeWeight(20);
    line(0, -180/2, 0, 180/2);
    stroke(217, 176, 41);
    strokeWeight(3);
    // In between lines to give wood texture
    arc(0, 0, 190, 185, -89, 90);
    arc(0, 0, 180, 175, -89, 90);
    line(0, -180/2, 0, 180/2);
    popMatrix();
    // That D's on fire!
    
    //fire(x+s/4, y-s*2/5, s/2, 23);
    //fire(x+s/4, y-s*2/5, s/2, 25);
    fire(x+s/4, y-s*2/5, s/2, 28);
}; // Draw the D for Disaster
var s = function(x, y, s, r){
    pushMatrix();
    translate(x, y-90);
    scale(s/180);
    rotate(r);
    strokeWeight(20);
    noFill();
    // Make a top arc and a bottom arc for the S
    stroke(150, 124, 32);
    arc(0, 45, 90, 90, -270, -40);
    arc(0, 135, 90, 90, -90, 140);
    stroke(217, 176, 41);
    strokeWeight(3);
    // Lines in between to give a wood texture
    arc(0, 45, 100, 90, -270, -40);
    arc(0, 135, 84, 90, -90, 140);
    arc(0, 45, 80, 76, -270, -40);
    arc(0, 135, 102, 104, -90, 140);
    // Wonky nail
    strokeWeight(2);
    stroke(212, 212, 212);
    line(0, 5, 4, 0);
    line(10, -1, 4, 0);
    fill(212, 212, 212);
    ellipse(10, 0, 5, 5);
    popMatrix();
}; // Draw the S for Studios
var logo = function(x, y, sc, r){
    angleMode = "degrees";
    d(x-sc/2, y, sc);
    s(x+sc/2, y, sc, r);
}; // Draw all of it

/* --- DRAW --- */
draw = function() {
    
    textFont(createFont("Tahoma Bold"));
    time++;
    angleMode = "degrees";
    noStroke();
    fill(0, 0, 0, 200);
    rect(0, 0, width, height);
    pushMatrix();
    logo(180, 200, 200/*+sin(frameCount*4)*10*/, sin(frameCount*4)*(1000/frameCount));
    popMatrix();
    fill(txtColor1);
    textAlign(CENTER, CENTER);
    textSize(45);
    text("Disaster Studios", 201, 360);
    txtColor1+=0.3;
    if(txtColor1 > 255){
        txtColor1 = 255;
    }
    if(time > 500){
        loaded = true;
    }
    if(loaded === true){
        switch(gameStateNumber) {
            case 0: // When gameStateNumber equals 0, draw the menu, this is by default
                menu();
                break;
            case 1:
                help();
                break;
            case 2:
                credits();
                break;
            case 3: // When gameStateNumber equals 3, draw the first level
                level01();
                break;
        }
    }
};
