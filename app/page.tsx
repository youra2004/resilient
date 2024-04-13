import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Filters } from "@/components/custom";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Filters />

      <Card className='p-4 w-3/4'>
        <CardContent className='flex flex-col gap-3 w-72'>
          <CardTitle>Headline</CardTitle>
          <CardDescription>
            Please add your content here. Keep it short and simple. And smile :)
          </CardDescription>
        </CardContent>

        <Accordion type="single" collapsible className="w-full px-6">
          <AccordionItem value="item-1">
            <AccordionTrigger>Show Lessons</AccordionTrigger>
            <AccordionContent>Lesson #1</AccordionContent>
            <AccordionContent>Lesson #2</AccordionContent>
            <AccordionContent>Lesson #3</AccordionContent>
          </AccordionItem>
        </Accordion>

        <CardFooter className='flex flex-col items-start gap-2 py-3'>
          <span>Categories</span>

          <div className='flex gap-4'>
            <div className='border p-2 px-6 rounded-full'>Tag 1</div>
            <div className='border p-2 px-6 rounded-full'>Tag 2</div>
            <div className='border p-2 px-6 rounded-full'>Tag 3</div>
          </div>
        </CardFooter>

      </Card>
    </main>
  );
}
