import { Filters } from '@/components/custom';
import { getCategories, getCourses, getUserProgress } from '@/request';
import { CourseCard } from '@/components/custom/course-card';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface HomeProps {
  searchParams?: { categoryIds: string };
}
export default async function Home({ searchParams }: HomeProps) {
  const courses = await getCourses();

  const categories = await getCategories();

  const userProgres = await getUserProgress(
    'd9297797-c9fc-449a-b71d-2f14696ec6c9'
  );

  return (
    <>
      <Filters categories={categories?.data} />

      <div className='flex w-full gap-6 items-start'>
        <div className='flex flex-col gap-4 w-3/4'>
          {courses?.data?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <Card className='flex flex-col w-1/4'>
          <CardHeader>
            <CardTitle className='text-center mb-3'>Your progress</CardTitle>
          </CardHeader>

          {userProgres?.data && userProgres.data.length > 0 ? (
            userProgres.data.map((progres) => (
              <CardContent
                key={progres.id}
                className='flex items-center justify-between px-4 w-full'
              >
                <CardTitle>{progres.course_name}</CardTitle>
                <CardDescription>
                  {progres.completed_lessons_qty} / {progres.total_lessons_qty}
                </CardDescription>
              </CardContent>
            ))
          ) : (
            <CardContent className='flex items-center justify-center px-4'>
              <CardDescription>You have not start any course</CardDescription>
            </CardContent>
          )}
        </Card>
      </div>
    </>
  );
}
