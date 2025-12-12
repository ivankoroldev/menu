import {menusApi} from "../api/menus.ts";
import {
    keepPreviousData,
    useQuery
} from '@tanstack/react-query'

const useMaraphonesDaysQuery = (maraphone_id: number) => {
    return useQuery({
        queryKey: ["days", "list", { maraphone_id }],
        queryFn: (meta) => menusApi.getMenuDays({maraphone_id}, meta),
        staleTime: 1000 * 5,
        cacheTime: 1000 * 2,
        placeholderData: keepPreviousData
    })
}

export default useMaraphonesDaysQuery;

