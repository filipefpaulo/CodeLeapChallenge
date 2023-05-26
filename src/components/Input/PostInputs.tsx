import { PostInterface } from '../../interfaces/post.interface';
import { Input } from '.';

interface PostInputProps {
  post: Partial<PostInterface>;
  setPost: (post: Partial<PostInterface>) => void;
}

export function PostInputs({ post, setPost }: PostInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Input
        type="text"
        labelName="Title"
        placeholder="Hello world"
        name="title"
        value={post.title || ''}
        onChange={handleChange}
      />
      <Input
        type="text"
        labelName="Content"
        placeholder="Content here"
        className="pb-11"
        name="content"
        value={post.content || ''}
        onChange={handleChange}
      />
    </div>
  );
}
