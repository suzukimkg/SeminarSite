import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Teacher from '@/components/Teacher';

export const revalidate = 60;

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <>
      <Teacher />
    </>
  );
}
