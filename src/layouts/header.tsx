import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header className="bg-primary">
    <div className="flex items-center justify-between max-w-screen-xl mx-auto p-4">
      <div className="flex items-center space-x-4">
        <Link aria-label="Home" href="/">
          <Image alt="itk-blog logo" height={64} src="/logo.png" width={64} />
        </Link>
        <nav className="flex space-x-6">
          <Link className="text-white hover:underline" href="/tags">
            Tags
          </Link>
          <Link className="text-white hover:underline" href="/about">
            About
          </Link>
          <button className="bg-primary text-white hover:underline">Search</button>
        </nav>
      </div>
    </div>
  </header>
);
