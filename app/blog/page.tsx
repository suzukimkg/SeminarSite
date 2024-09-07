import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';
import Nav from '@/components/Nav';
import { getTagList } from '@/libs/microcms';

export const revalidate = 60;

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <div style={{ marginTop: '120px' }} className="mx-auto">
      <Nav tags={tags.contents} />
      <div className="flex justify-center">
        <ArticleList articles={data.contents} />
      </div>
      <Pagination totalCount={data.totalCount} />
    </div>
  );
}
