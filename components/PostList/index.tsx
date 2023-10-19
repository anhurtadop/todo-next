import styles from './styles.module.scss';

export interface PostListProps {
  posts: any
}

const PostList: React.FC<PostListProps> = (props) => {
  return (
    <ul className={styles.ul}>
      {props.posts.map((post: any) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
        </li>
      ))}
    </ul>
  )
}

export default PostList