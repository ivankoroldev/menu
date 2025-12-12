import {useNavigate} from "react-router";

interface DayListItemProps {
    item: DayPlan
}

const DayListItem: React.FC<DayListItemProps> = ({item}) => {
    let navigate = useNavigate();

    const handleClick = () => navigate(`${item.day}`)
    return (
        <div className="day-item">
            <div className="day-item-inner" onClick={handleClick}>
                <div>
                    День: {item.day}
                </div>
                <h4>
                    {item.weekday}
                </h4>
            </div>
        </div>
    )
}

export default DayListItem;
