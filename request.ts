import axios from './api';
import { CoursesDTO } from './types/courses';

export const getCourses = async () => {
  try {
    return await axios.get<CoursesDTO[]>('/courses?search=');
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message); // Now we are passing a string to Error constructor
    } else {
      // If it's not an Error, use a generic error message or convert error to a string
      throw new Error('An unknown error occurred');
    }
  }
};
