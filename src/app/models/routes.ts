import { StepDetails } from "./step-details";

export enum Route {
    ERROR = 'error',
    MOVIES_LIST = 'movies_list',
    MOVIE_DETAILS = 'movie_details',
}

export const MOVIES_LIST_STEP: StepDetails = {
    id: Route.MOVIES_LIST,
    url: '/'
};
export const MOVIE_DETAILS_STEP: StepDetails = {
    id: Route.MOVIE_DETAILS,
    url: '/movie-details'
};
export const ERROR_STEP: StepDetails = {
    id: Route.ERROR,
    url: '/error'
};