import * as React from "react";
import type Menu from "../../../models/menu.model.ts";
import { useNavigate } from "react-router";

interface MaraphoneItemProps {
    item: Menu
}

const MaraphoneItem: React.FC<MaraphoneItemProps> = ({item}) => {
    let navigate = useNavigate();

    return (
        <div className="maraphone-item" onClick={() => navigate(`/maraphones/${item.id}/days`)}>{item.name}</div>
    )
}

export default MaraphoneItem;
