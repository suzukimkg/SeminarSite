import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import Privacy from '@/components/Privacy';

export const revalidate = 60;

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <>
      <Privacy />
    </>
  );
}
