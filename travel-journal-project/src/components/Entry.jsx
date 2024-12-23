import RoomIcon from '@mui/icons-material/Room';
import Card from './Card';

export default function Entry ({ data }) {
    return (
        <div className='Entry'>
            {data.map((d) => (
                <Card key={d.id} d={d} />
            ))}
        </div>
    )
}