import RoomIcon from '@mui/icons-material/Room';

export default function Entry () {
    return (
        <div className='Entry'>
            <div className='main-img-container'>
                <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="" />
            </div>
            <div>
                <RoomIcon fontSize='large' sx={{ marginRight: "4px"}}/>
                <span>Japan</span>            
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">View on Google Maps</a>
                <h2>Mount Fuji</h2>
                <p>12 Jan, 2021 - 24 Jan, 2021</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}