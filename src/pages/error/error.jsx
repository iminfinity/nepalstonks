import "./error.styles.scss";

const Error = () => {
    return(
        <main className="error-page">
            <img 
                src="https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif" 
                alt="" 
                onContextMenu={(event)=> event.preventDefault()}
                draggable={false}
                />
        </main>
    )
}

export default Error;