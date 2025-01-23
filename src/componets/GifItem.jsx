export const GifItem = ({id, url,title}) => {
    // <img key={id} src={url} alt={title} />
    return (
        <div className="card">
            <img key={id} src={url} alt={title} />
            <p>{title}</p>
        </div>
    )   
}