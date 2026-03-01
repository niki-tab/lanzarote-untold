"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, Suspense } from "react";

function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-footer-bg p-8"
    >
      {error && (
        <div className="mb-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <div className="mb-5">
        <label className="mb-1.5 block font-inter text-xs font-medium tracking-wide text-text-muted">
          EMAIL
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border border-border bg-dark-bg px-4 py-2.5 font-inter text-sm text-text-primary outline-none transition-colors focus:border-gold/50"
          placeholder="admin@lanzaroteuntold.com"
        />
      </div>

      <div className="mb-6">
        <label className="mb-1.5 block font-inter text-xs font-medium tracking-wide text-text-muted">
          PASSWORD
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-lg border border-border bg-dark-bg px-4 py-2.5 font-inter text-sm text-text-primary outline-none transition-colors focus:border-gold/50"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-gold px-4 py-2.5 font-inter text-sm font-medium text-text-dark transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-bg">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="font-cormorant text-3xl font-medium text-gold">
            Lanzarote Untold
          </h1>
          <p className="mt-2 font-inter text-sm font-light text-text-muted">
            Admin Panel
          </p>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
