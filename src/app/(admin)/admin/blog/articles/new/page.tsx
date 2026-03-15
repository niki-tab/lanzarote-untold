import { AdminArticleForm } from "@/presentation/components/admin/blog/AdminArticleForm";

export default function NewArticlePage() {
  return (
    <div>
      <h1 className="mb-8 font-cormorant text-3xl font-medium text-text-primary">
        New Article
      </h1>
      <AdminArticleForm />
    </div>
  );
}
