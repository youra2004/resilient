import { Logo } from './logo';
import { ModeToggle } from '.';
import { Separator } from '../ui/separator';
import { NavLink } from './nav-link';

export const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between p-6">
        <div className='flex-1'>
          <Logo />
        </div>

        <div className='flex gap-4 flex-1 justify-center items-center'>
          <NavLink href='courses' className='text-lg hover:text-muted-foreground transition-colors'>Courses</NavLink>

          <Separator orientation='vertical' className='h-4' />

          <NavLink href='services' className='text-lg hover:text-muted-foreground transition-colors'>Services</NavLink>
        </div>

        <div className='flex gap-4 items-center flex-1 justify-end'>
          <ModeToggle />
          <span>Name Surname</span>
        </div>

      </div>
      <Separator />
    </>
  );
};
