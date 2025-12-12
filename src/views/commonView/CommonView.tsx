import {Outlet} from "react-router";
import queryClient from "../../api/query-client.ts";
import {
    QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const CommonView = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Outlet />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default CommonView;
