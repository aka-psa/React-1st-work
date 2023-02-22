import React from 'react';
class Circle1 extends React.Component{
    render(){
    var r=5;
    return (2*3.14*r);
    }
}
class Triangle1 extends React.Component{
    render(){
        var b=5;
        var h=6;
        var j=7;
        return (j+b+h);
    }
}
class Square1 extends React.Component{
    render(){
        var a=16;
        return (4*a);
    }
}
class Rhombus1 extends React.Component{
    render(){
        var b=4;
        return (b*4);
    }
}
export {Circle1,Triangle1,Square1,Rhombus1};