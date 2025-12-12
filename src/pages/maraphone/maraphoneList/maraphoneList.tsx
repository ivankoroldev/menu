import useMaraphonesQuery from "../../../hooks/useMaraphonesQuery";
import {useState} from "react";
import MaraphoneItem from "../maraphoneItem/MaraphoneItem.tsx";

const MaraphoneList = () => {
    const {data: menusData, error, isPending } = useMaraphonesQuery(1)
    return (
        <div>
            {error && <div>error</div>}
            {isPending && <div>loading...</div>}
            { !isPending && (
                <div className="maraphones-list">
                    <h1>Maraphones</h1>
                    {
                        menusData?.data?.map(menu => <MaraphoneItem key={menu.id} item={menu} />)
                    }
                </div>
            )}

        </div>

    )
}

export default MaraphoneList;
