import React from 'react';
function Circle(){
    var l=0;
    var r=5;
    return (Math.floor(3.14*r*r));
}
function Triangle(){
    var b=5;
    var h=6;
    return (0.5*b*h);
}
function Square(){
    var a=8;
    return (a*a);
}
function Rhombus(){
    var b=4;
    var h=2;
    return (b*h*0.5);
}
export {Circle,Triangle,Square,Rhombus};