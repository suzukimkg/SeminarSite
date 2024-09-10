import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/libs/microcms';
import styles from './index.module.css';
import TagList from '../TagList';
import PublishedDate from '../Date';

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  return (
    <li className="flex flex-col items-start justify-between border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:-translate-y-1">
      <a href={`/articles/${article.id}`} className="block w-full h-full p-1 hover:text-black">
        <div className="relative w-full">
          <img
            alt=""
            src={article.thumbnail?.url || '/noimage.png'}
            className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
        <div className="max-w-xl">
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6">{article.title}</h3>
            <p className="mt-3 line-clamp-3 text-sm leading-6">{article.description}</p>
          </div>
          <div className="flex items-center gap-x-4 text-xs">
            <PublishedDate date={article.publishedAt || article.createdAt} />
            {/* <TagList tags={article.tags} hasLink={false} /> */}
          </div>
        </div>
      </a>
    </li>
  );
}
