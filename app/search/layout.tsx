import { getTag } from '@/libs/microcms';
import TagListItem from '@/components/TagListItem';
import styles from './layout.module.css';
import Nav from '@/components/Nav';
import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';

type Props = {
  children: React.ReactNode;
  params: {
    tagId: string;
  };
};

export default async function TagsLayout({ children, params }: Props) {
  const { tagId } = params;
  const tag = await getTag(tagId);
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <div style={{ marginTop: '120px' }}>
      <Nav tags={tags.contents} />
      <div>{children}</div>
    </div>
  );
}
