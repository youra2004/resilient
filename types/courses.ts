export interface CoursesDTO {
  id: string;
  title: string;
  description: string;
  category_name: string;
  lessons: LessonsDTO[];
}

export interface LessonsDTO {
  id: string;
  title: string;
  content: string;
  course_id: string;
}
