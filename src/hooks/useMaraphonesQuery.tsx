import {menusApi} from "../api/menus.ts";
import {
    keepPreviousData,
    useQuery
} from '@tanstack/react-query'

const useMaraphonesQuery = (page: number) => {
    return useQuery({
        queryKey: ["maraphones", "list", { page }],
        queryFn: (meta) => menusApi.getMenus({page}, meta),
        staleTime: 1000 * 5,
        cacheTime: 1000 * 2,
        placeholderData: keepPreviousData
    })
}

export default useMaraphonesQuery;
