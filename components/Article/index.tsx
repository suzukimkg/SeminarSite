import { formatRichText } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import PublishedDate from '../Date';
import TagList from '../TagList';
import Profile from '../Profile';
import './article.css';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  return (
    <main className="bg-white mt-10">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {data.title}
        </h1>
        <picture>
          <source
            type="image/webp"
            media="(max-width: 640px)"
            srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
          />
          <source
            type="image/webp"
            srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
          />
          <img
            src={data.thumbnail?.url}
            alt=""
            className="mt-5 aspect-video bg-gray-50 object-cover"
            width={data.thumbnail?.width}
            height={data.thumbnail?.height}
          />
        </picture>
        {/* <p className="mt-6 text-xl leading-8">{data.description}</p> */}

        <div className="max-w-3xl">
          <div className="text-gray-600">
            <PublishedDate date={data.publishedAt || data.createdAt} />
            {/* {data.tags && <TagList tags={data.tags} />} */}
          </div>

          <hr className="mt-10" />

          <div
            className="mt-8 text-gray-600"
            dangerouslySetInnerHTML={{
              __html: `${formatRichText(data.content)}`,
            }}
          />

          <Profile writer={data.writer} />
        </div>
      </div>
    </main>
  );
}
