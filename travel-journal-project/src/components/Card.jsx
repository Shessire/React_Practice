import RoomIcon from '@mui/icons-material/Room';

function Card ({ d }) {
    return (
        <div className='Card'>
            <div className='main-img-container'>
                <img src={d.img.src} alt={d.img.alt} />
            </div>
            <div className='info-container'>
                <RoomIcon fontSize='small' sx={{ marginRight: "4px", color: "#F55A5A"}}/>
                <span>{d.country}</span>            
                <a href={d.googleMapsLink}>View on Google Maps</a>
                <h2>{d.title}</h2>
                <p className='date'>{d.dates}</p>
                <p className='desc'>{d.text}</p>
            </div>
        </div>
    )
}

export default Card;