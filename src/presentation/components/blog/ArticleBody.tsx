interface ArticleBodyProps {
  html: string;
}

export function ArticleBody({ html }: ArticleBodyProps) {
  return (
    <article
      className="blog-prose mx-auto max-w-3xl px-5 py-12 lg:px-0 lg:py-16"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
