export interface UserProgress {
  id: string;
  completed_lessons_qty: number;
  total_lessons_qty: number;
  course_id: string;
  user_id: string;
  is_completed: boolean;
  course_name: string;
}

export interface UserCooperation {
  id: string;
  is_active: boolean;
  user_id: string;
  service_id: string;
  service_name: string;
}
