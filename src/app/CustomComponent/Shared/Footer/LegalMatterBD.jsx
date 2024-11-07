import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";

export default function LegalMatterBD() {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;

  if (token) {
    redirect("/dashboard");
  }

  return (
    <Link href="/login">
      <button>LegalMatterBD</button>
    </Link>
  );
}
