import shoe from './shoe.jpg';
function Image(){
    return(
        <div>
            <img id="image"src={shoe} alt="shoe" width="500" height="500"></img>
        </div>
    );
}

export default Image;