import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Filters } from "@/components/custom";
import { getCategories, getCourses } from '@/request';

interface HomeProps {
  searchParams?: { categoryIds: string }
}
export default async function Home({ searchParams }: HomeProps) {
  const courses = await getCourses({
    categoriesIds: JSON.parse(searchParams?.categoryIds),
  });

  const categories = await getCategories();

  console.log('courses', courses);

  return (
    <>
      <Filters categories={categories?.data} />

      <div className="flex flex-col gap-2 w-3/4">
        {courses?.data?.map((course) => (
          <Card className="p-4 w-full" key={course.id}>
            <CardContent className="flex flex-col gap-3 w-72">
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardContent>

            <Accordion type="single" collapsible className="w-full px-6">
              <AccordionItem value="item-1">
                <AccordionTrigger>Show Lessons</AccordionTrigger>

                {course.lessons?.map((lesson) => (
                  <AccordionContent key={lesson.id}>
                    {lesson.title}
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>

            {course.category_name && (
              <CardFooter className="flex flex-col items-start gap-2 py-3">
                <span>Categories</span>

                <div className="flex gap-4">
                  <div className="border p-2 px-6 rounded-full">
                    {course.category_name}
                  </div>
                </div>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </>
  );
}
