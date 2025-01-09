const openlink=({redirectUrl,logoImage})=>{
    return(
        <div>
             <a href={redirectUrl} target="_blank">
                <img src={logoImage} className="logo" alt="Vite logo"/>
            </a>
        </div>
    );
};
export default openlink;