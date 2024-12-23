import RoomIcon from '@mui/icons-material/Room';

function Card ({ d }) {
    return (
        <div className='Card'>
            <div className='main-img-container'>
                <img src={d.img} alt="" />
            </div>
            <div>
                <RoomIcon fontSize='large' sx={{ marginRight: "4px"}}/>
                <span>{d.country}</span>            
                <a href={d.map}>View on Google Maps</a>
                <h2>{d.name}</h2>
                <p>{d.date}</p>
                <p>{d.description}</p>
            </div>
        </div>
    )
}

export default Card;