import type Menu from "../models/menu.model.ts";
import type {DayPlan} from "../models/days.ts";

const BASE_URL = "http://localhost:3000";

interface Response<T> {
    data: T;
    first: 1
    items: 100
    last: 10
    next: 2
    pages: 10
    prev: null
}

interface IMenuApi {
    getMenus: () => Promise<Response<Menu[]>>,
    getMenuDays: () => Promise<Response<DayPlan[]>>,
    getMenuDay: () => Promise<DayPlan[]>
}

export const menusApi: IMenuApi =  {
    getMenus: ({page = 1}: { page: number }, {signal}: {signal: AbortSignal}) : Promise<Response<Menu[]>> => {
        return fetch(`${BASE_URL}/maraphones?_page=${page}&_per_page=10`, {signal}).then(res => res.json()) as Promise<Response<Menu[]>>;
    },
    getMenuDays: ({maraphone_id = 1}: { maraphone_id: number }, {signal}: {signal: AbortSignal}) : Promise<Response<Menu[]>>  => {
        return fetch(`${BASE_URL}/days?maraphone_id=${maraphone_id}&_page=${1}&_per_page=35`, {signal}).then(res => res.json()) as Promise<Response<Menu[]>>;
    },
    getMenuDay: ({maraphone_id = 1, day_id = 1}: { maraphone_id: number, day_id: number }, {signal}: {signal: AbortSignal}) : Promise<DayPlan[]> => {
        return fetch(`${BASE_URL}/days?maraphone_id=${maraphone_id}&day=${day_id}`, {signal}).then(res => res.json()) as Promise<DayPlan[]>;
    },
}
