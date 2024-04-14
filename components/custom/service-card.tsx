'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { createCooperations } from '@/request';
import { ServiceDTO } from '@/types/courses';
import { UserCooperation } from '@/types/user';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Button } from '../ui/button';

export const ServiceCard = ({
  service,
  cooperation,
}: {
  service: ServiceDTO;
  cooperation?: UserCooperation[];
}) => {
  const isEnrolled = cooperation?.find(
    ({ service_id }) => service_id === service.id
  );

  const enrollHandler = async () => {
    try {
      await createCooperations(
        'd9297797-c9fc-449a-b71d-2f14696ec6c9',
        service.id
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className='p-4 w-3/4'>
      <CardContent className='flex flex-col gap-3 '>
        <CardTitle>{service.title}</CardTitle>
        <Typography className='text-sm'>{`${service.author.name}, ${service.author.age} y.o.`}</Typography>
        <Typography className='text-sm'>
          {service.author.personal_info}
        </Typography>
        <CardDescription>{service.description}</CardDescription>
      </CardContent>

      {!isEnrolled && (
        <>
          <Separator />

          <CardFooter className='flex flex-col items-start gap-2 py-2'>
            <Button onClick={enrollHandler}>Start this service</Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
};
