import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';

export const revalidate = 60;

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <>
      <h1>ホームページ</h1>
    </>
  );
}
