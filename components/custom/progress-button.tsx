'use client';

import { startProgresCourse } from '@/request';
import { Button } from '../ui/button';
import { useState } from 'react';

interface ProgressButtonProps {
  courseId: string;
}

export const ProgressButton = ({ courseId }: ProgressButtonProps) => {
  const [progressStarted, setProgressStarted] = useState(false);

  const startProgressHandler = async () => {
    try {
      await startProgresCourse('d9297797-c9fc-449a-b71d-2f14696ec6c9', courseId);

      setProgressStarted(true)
    } catch (error) {
      console.log(error);
    }
  };

  if (progressStarted) {
    return null
  }

  return (
    <div className='flex items-start mt-4 w-full'>
      <Button onClick={startProgressHandler}>Start the course</Button>
    </div>
  );
};
