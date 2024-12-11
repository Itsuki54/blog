import parse from 'html-react-parser';

import { client } from "@/lib/client";

import type { EndPoints } from '@/types/cms-types'

export default async function Blog({ params }: { params: { id: string } }) {
  const { id } = await params;
  const blog = await client.get<EndPoints['get']['blogs']>({
    endpoint: "blogs",
    contentId: id
  });

  return (
    <div>{parse(blog.content)}</div>
  );
}