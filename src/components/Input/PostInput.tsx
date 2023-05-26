import { useState } from 'react';

import { Input } from '../Input';

export function usePostInput() {
  const [post, setPost] = useState({ title: '', content: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const PostInputs = () => (
    <div>
      <Input
        type="text"
        labelName="Title"
        placeholder="Hello world"
        name="title"
        value={post.title}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        labelName="Content"
        placeholder="Content here"
        className="pb-11"
        name="content"
        value={post.content}
        onChange={handleInputChange}
      />
    </div>
  );

  return { post, PostInputs };
}
