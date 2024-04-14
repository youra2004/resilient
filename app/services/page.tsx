import { ServiceCard } from '@/components/custom';
import axios from '@/api';
import { ServiceDTO } from '@/types/courses';
import { getCooperations } from '@/request';
import { Card, CardContent, CardDescription } from '@/components/ui/card';

const getServices = async () => {
  try {
    const { data } = await axios.get<ServiceDTO[]>('/services');

    return data;
  } catch (error) {
    console.log('error', error);
  }
};

export default async function ServicesPage() {
  const services = await getServices();

  const cooperation = await getCooperations(
    'd9297797-c9fc-449a-b71d-2f14696ec6c9'
  );

  return (
    <div className='flex w-full items-start gap-6'>
      {services?.map((service) => (
        <ServiceCard key={service.id} service={service} cooperation={cooperation?.data} />
      ))}

      <Card className='w-1/4 p-4 '>
        <CardContent>
          {cooperation?.data && cooperation?.data.length > 0 ? (
            <div>
              <h2>Your active services:</h2>

              <div className='flex gap-3 mt-4 flex-wrap'>
                {cooperation?.data.map(({ id, service_name }) => (
                  <div key={id} className='bg-primary rounded-3xl py-1 px-4'>{service_name}</div>
                ))}
              </div>
            </div>
          ) : (
            <div className='flex items-center justify-center text-center h-full'>
              <CardDescription>
                You do not have any active service
              </CardDescription>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
