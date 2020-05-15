import {route} from "./Routes";

export const navLink= [
    {
        title: 'Live Consultation',
        link:route.LIVE_CONSULTATION,
        upComing:true,
    },
    {
        title: 'Buy Plans',
        link:route.BUY_PLANS,
        upComing:false,
    },
    {
        title: 'View Plans',
        link:route.VIEW_PLANS,
        upComing:false,
    },
];

