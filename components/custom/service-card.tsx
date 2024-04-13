import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const ServiceCard = () => {
  return (
    <Card className='p-4'>
      <CardContent className='flex flex-col gap-3 w-72'>
        <CardTitle>Headline</CardTitle>
        <CardDescription>
          Please add your content here. Keep it short and simple. And smile :)
        </CardDescription>
      </CardContent>

      <Separator />

      <CardFooter className='flex flex-col items-start gap-2 py-2'>
        <span>Categories</span>

        <div className='flex gap-4'>
          <div className='border p-2 px-6 rounded-full'>Tag 1</div>
          <div className='border p-2 px-6 rounded-full'>Tag 2</div>
          <div className='border p-2 px-6 rounded-full'>Tag 3</div>
        </div>
      </CardFooter>
    </Card>
  );
};
