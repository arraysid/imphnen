import { redirect } from "next/navigation";

export default function Page({ params }: { params: { username: string } }) {
  redirect(`https://profile.imphnen.com/${params.username}`);
}
