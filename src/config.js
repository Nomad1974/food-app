
const API_KEY = process.env.REACT_APP_API_KEY;

const BASE_URL = `www.themealdb.com/api/json/v1/${API_KEY}/`;

export const ALL_CATEGORIES = BASE_URL + 'categories.php';

export const getFilteredCategory = (catName) => BASE_URL + 'filter.php?c=' + catName;

export const getFilteredArea = ( areaName) => BASE_URL + 'filter.php?a=' + areaName;