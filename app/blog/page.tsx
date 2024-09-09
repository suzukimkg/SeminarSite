import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';
import Nav from '@/components/Nav';
import { getTagList } from '@/libs/microcms';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

export const revalidate = 60;

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <div
      className="mx-auto max-w-7xl px-6 lg:px-8"
      style={{ marginTop: '120px', marginBottom: '120px' }}
    >
      <h1 className="text-3xl font-bold">
        <div className="flex items-center pb-2 pt-2 mt-5">
          <InformationCircleIcon className="h-8 w-8 mr-2" aria-hidden="true" />
          <div className="text-black">ブログ</div>
        </div>
      </h1>
      {/* <Nav tags={tags.contents} /> */}
      <div className="flex mt-10">
        <ArticleList articles={data.contents} />
      </div>
      <Pagination totalCount={data.totalCount} />
    </div>
  );
}
