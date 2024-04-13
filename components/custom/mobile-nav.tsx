import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerPortal,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ModeToggle, NavLink } from '.';
import { Separator } from '../ui/separator';

export const MobileNav = () => {
  return (
    <Drawer direction='right'>
      <DrawerTrigger>
        <HamburgerMenuIcon height={24} width={24} />
      </DrawerTrigger>

      <DrawerPortal>
        <DrawerOverlay className='fixed inset-0 bg-black/40' />
        <DrawerContent className='h-full w-3/4 fixed bottom-0 right-0 left-1/4 px-6'>
          <div className='flex flex-col gap-4 mt-6'>
            <NavLink
              href='courses'
              className='text-lg hover:text-muted-foreground transition-colors'
            >
              Courses
            </NavLink>

            <NavLink
              href='services'
              className='text-lg hover:text-muted-foreground transition-colors'
            >
              Services
            </NavLink>
          </div>

          <Separator className='my-6' />

          <div className='flex gap-4 items-center'>
            <ModeToggle />
            <span>Name Surname</span>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};
