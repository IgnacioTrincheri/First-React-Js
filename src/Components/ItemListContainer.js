import '../App.css'

const ItemListCont = ({name, image, size}) => {

    return (
        <div className="card">
            <img alt={`${name}`} src={image} />
            <div className="description-cont">
            <h3 className="prod"> {name} </h3>
            <p>Talles:{size}</p>
            </div>
        </div>
    )
}

export default ItemListCont;