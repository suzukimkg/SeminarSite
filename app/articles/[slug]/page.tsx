import { Metadata } from 'next';
import { getDetail } from '@/libs/microcms';
import Article from '@/components/Article';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || ''],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return (
    <div
      className="mx-auto max-w-7xl px-6 lg:px-8 main_side top_title"
      style={{ marginTop: '120px', marginBottom: '120px' }}
    >
      {/* <h1 className="text-3xl font-bold">
        <div className="flex items-center pb-2 pt-2 mt-5">
          <InformationCircleIcon className="h-8 w-8 mr-2" aria-hidden="true" />
          <div className="text-black">ブログ</div>
        </div>
      </h1> */}
      <Article data={data} />
    </div>
  );
}
