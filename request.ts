import axios from './api';
import { CategoriesDTO } from './types/categories';
import { CoursesDTO } from './types/courses';

export const getCourses = async (params?) => {
  const test = JSON.stringify(params.categoriesIds);
  console.log('test', JSON.stringify(params.categoriesIds));

  try {
    return await axios.get<CoursesDTO[]>('/courses?search=');
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    return await axios.get<CategoriesDTO[]>('/courses/categories');
  } catch (error) {
    console.log(error);
  }
};
