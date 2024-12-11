import Link from "next/link";

import { client } from "@/lib/client";

import type { EndPoints } from '@/types/cms-types'

export default async function Home() {
  const blogs = await client.get<EndPoints['gets']['blogs']>({
    endpoint: "blogs",
  });
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogs.contents.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <div>{blog.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
