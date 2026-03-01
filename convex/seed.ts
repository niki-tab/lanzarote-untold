import { mutation } from "./_generated/server";
import bcrypt from "bcryptjs";

export const seed = mutation({
  handler: async (ctx) => {
    // Check if already seeded
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", "admin@lanzaroteuntold.com"))
      .first();

    if (existingUser) {
      return { message: "Already seeded" };
    }

    // Create admin user
    const hashedPassword = bcrypt.hashSync("Xk9#mPvL$2wQr!7nBz", 12);
    await ctx.db.insert("users", {
      email: "admin@lanzaroteuntold.com",
      password: hashedPassword,
      name: "Admin",
      role: "admin",
    });

    // Create categories
    const categories = [
      {
        nameEn: "Nature & Volcano",
        nameEs: "Naturaleza y Volcán",
        slugEn: "nature-volcano",
        slugEs: "naturaleza-volcan",
        descriptionEn: "Explore Lanzarote's volcanic landscapes and natural wonders",
        descriptionEs: "Explora los paisajes volcánicos y maravillas naturales de Lanzarote",
        color: "#8B4513",
        isActive: true,
        sortOrder: 1,
      },
      {
        nameEn: "Sea & Adventure",
        nameEs: "Mar y Aventura",
        slugEn: "sea-adventure",
        slugEs: "mar-aventura",
        descriptionEn: "Discover the ocean activities and adventures around the island",
        descriptionEs: "Descubre las actividades oceánicas y aventuras alrededor de la isla",
        color: "#1E90FF",
        isActive: true,
        sortOrder: 2,
      },
      {
        nameEn: "Wine & Gastronomy",
        nameEs: "Vino y Gastronomía",
        slugEn: "wine-gastronomy",
        slugEs: "vino-gastronomia",
        descriptionEn: "Taste the unique wines and cuisine of Lanzarote",
        descriptionEs: "Degusta los vinos y la cocina única de Lanzarote",
        color: "#722F37",
        isActive: true,
        sortOrder: 3,
      },
      {
        nameEn: "Culture & Heritage",
        nameEs: "Cultura y Patrimonio",
        slugEn: "culture-heritage",
        slugEs: "cultura-patrimonio",
        descriptionEn: "Learn about the rich cultural heritage of the island",
        descriptionEs: "Conoce el rico patrimonio cultural de la isla",
        color: "#C9A962",
        isActive: true,
        sortOrder: 4,
      },
    ];

    for (const cat of categories) {
      await ctx.db.insert("blogCategories", cat);
    }

    return { message: "Seeded successfully" };
  },
});
