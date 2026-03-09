import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/infrastructure/auth/auth";
import { PrismaBlogRepository } from "@/infrastructure/adapters/PrismaBlogRepository";

const repository = new PrismaBlogRepository();

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const category = await repository.getCategoryById(id);
  if (!category) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(category);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await request.json();
  const category = await repository.updateCategory({ ...body, id });

  return NextResponse.json(category);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  await repository.deleteCategory(id);

  return NextResponse.json({ success: true });
}
