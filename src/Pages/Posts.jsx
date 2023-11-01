import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  console.log(posts);
  async function fetchPosts() {
    try {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2302-ACC-PT-WEB-PT-B/posts"
      );
      const data = await response.json();
      setPosts(data.data.posts);
    } catch (error) {}
  }
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="flex w-fit grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-1 gap-10">
      {posts.map((post) => {
        return (
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="card bg-white p-3 w-full shadow-lg rounded-lg transition duration-300 ease-in-out hover:shadow-2xl">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {post.title}
                </div>
                <p className="text-gray-700 text-base">{post.description}</p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{post.price}</p>

                  <p className="text-gray-600">{post.author.username}</p>
                </div>
              </div>
            </div>
          </div>
        );
        // <PostItem key={post._id} post={posts} />;
      })}
    </div>
  );
}
