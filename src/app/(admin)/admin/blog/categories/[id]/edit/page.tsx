import { AdminCategoryForm } from "@/presentation/components/admin/blog/AdminCategoryForm";

export default async function EditCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1 className="mb-8 font-cormorant text-3xl font-medium text-text-primary">
        Edit Category
      </h1>
      <AdminCategoryForm categoryId={id} />
    </div>
  );
}
