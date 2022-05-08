import NextHead from 'next/head';

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;

  /**
   * The title open graph meta tag.
   */
  ogTitle?: string;

  /**
   * The description open graph meta tag.
   */
  ogDescription?: string;

  /**
   * The url open graph meta tag.
   */
  ogUrl?: string;

  /**
   * The image open graph meta tag.
   */
  ogImage?: string;
}

const Head = ({
  title,
  description,
  keywords,
  author,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
}: HeadProps) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:image" content={ogImage} />
    <meta name="robots" content="follow, index" />
  </NextHead>
);

Head.defaultProps = {
  author: 'YOUR_NAME',
  description: 'A publicly interactive centralized blog',
  keywords: 'blog, post, blog-post, seo',
  ogDescription: 'A publicly interactive centralized blog',
  ogImage: 'https://next-starter-ebon.vercel.app/images/og.png',
  ogTitle: 'Centralized Blog 💬',
  ogUrl: 'https://next-starter-ebon.vercel.app/',
  title: 'Centralized Blog 💬',
};

export default Head;
