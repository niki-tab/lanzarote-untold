import { AdminArticleForm } from "@/presentation/components/admin/blog/AdminArticleForm";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1 className="mb-8 font-cormorant text-3xl font-medium text-text-primary">
        Edit Article
      </h1>
      <AdminArticleForm articleId={id} />
    </div>
  );
}
