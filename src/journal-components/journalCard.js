// import "../images"


export default function JournalCard(props) {

    return(
        <div  className="card">
            <div className="image--container">
                <img className="image" src={props.item.imgUrl}/>
            </div>
            <div className="card--content">
                <div className="location">
                    <h5><i class="fa-solid fa-location-dot location--logo red"></i>{props.item.location}</h5>
                    <span className="google--map grey">{props.item.googleMapsUrl}</span>
                </div>
                <h1 className="title">{props.item.title}</h1>
                <div className="date grey">
                    <span className="start--date">{props.item.startDate}</span> <span className="bold ">-</span> <span className="end--date">{props.item.startDate}</span>
                </div>
                <div className="description">
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>

    )
}
