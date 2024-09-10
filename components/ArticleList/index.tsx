import { Article } from '@/libs/microcms';
import ArticleListItem from '../ArticleListItem';
import styles from './index.module.css';

type Props = {
  articles?: Article[];
};

export default function ArticleList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }

  return (
    <div className="">
      <div className="mx-auto">
        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleListItem key={article.id} article={article} />
          ))}
        </ul>
      </div>
    </div>
  );
}
