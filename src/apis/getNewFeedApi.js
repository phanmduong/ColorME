import axios from 'axios';
import * as env from '../constants/env';

export function getNewFeedApi(filter, page_id) {
    // let url = env.API_COLORME + "/products?filter=" + filter + "?page=" + page_id;
    let url = 'http://api.colorme.vn/products/hanhtruong198@gmail.com?page=1&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjY4MjMsImlzcyI6Imh0dHA6Ly9hcGkuY29sb3JtZS52bi9sb2dpbiIsImlhdCI6MTUwNzA4MTc4MCwiZXhwIjoxNTA3Njg2NTgwLCJuYmYiOjE1MDcwODE3ODAsImp0aSI6Ilg0Nnd1UzRDY3hub0pQYWYifQ.2J28s8ClifOEJ9fVZL5X1dQJ6HftrhbCkzYEs9oLHfQ';
    return axios.get(url);
}

