import {menusApi} from "../api/menus.ts";
import {
    keepPreviousData,
    useQuery
} from '@tanstack/react-query'

const useDayQuery = (maraphone_id: number, day_id: number ) => {
    return useQuery({
        queryKey: ["day", "detail", { maraphone_id, day_id }],
        queryFn: (meta) => menusApi.getMenuDay({ maraphone_id, day_id }, meta),
        staleTime: 1000 * 5,
        cacheTime: 1000 * 2,
        placeholderData: keepPreviousData
    })
}

export default useDayQuery;
