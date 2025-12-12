import useMaraphoneDaysQuery from "../../../hooks/useMaraphoneDaysQuery";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import DayListItem from "../dayListItem/DayListItem.tsx";

const DaysList = () => {
    let params = useParams();
    const {data: daysData, error, isPending } = useMaraphoneDaysQuery(params.menuId as number);

    return (
        <>
            { error && <div>error</div> }
            { isPending && <div>loading...</div> }
            { !isPending && (
                <div className="days-list">
                    {
                        daysData?.data?.map(day => <DayListItem key={day.day} item={day} />)
                    }
                </div>
            )}
        </>
    )
}

export default DaysList;
