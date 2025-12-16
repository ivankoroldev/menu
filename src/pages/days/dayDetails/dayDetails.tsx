import {useParams} from "react-router";
import useDayQuery from "../../../hooks/useDayQuery.tsx";
import type {MealItem} from "../../../models/days.ts";

const DayDetails = () => {
    let {menuId, dayId} = useParams();
    const {data: daysData, error, isPending } = useDayQuery(menuId as number, dayId as number);
    return (
        <div>
            {error && <div>error</div>}
            {isPending && <div>loading...</div>}
            { !isPending && (
                <div>
                    <h3 className="meals-wrapper-header">{daysData[0].weekday}</h3>
                    <div className="meals-wrapper">
                        {Object.values(daysData[0].meals).map((item,index) => {
                            return <div key={index} className="meal">
                                <h4>{item.name}</h4>
                                { item.items.map(({ingredient, index}: {ingredient: MealItem, index: number}) => {
                                    return <div key={index} className="ingredient">
                                        <span>{ingredient.dish}</span>
                                        {ingredient.amount && <strong> - {ingredient.amount}</strong>}
                                    </div>
                                }) }
                            </div>
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DayDetails;
