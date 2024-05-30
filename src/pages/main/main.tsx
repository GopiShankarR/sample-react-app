import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface Post {
  id: string,
  userId: string,
  title: string,
  user: string,
  description: string
}

export const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsReference = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsReference);
    setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]);
  };

  // getPosts();
  useEffect(() => {
    getPosts();
  }, []);

  return <div> {postsList?.map((post) => <Post post={post} />)} </div>;
}