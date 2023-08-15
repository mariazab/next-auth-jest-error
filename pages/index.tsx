import { useSession } from "next-auth/react";

export default function Index() {
  const { status } = useSession();

  return <>Status {status}</>;
}
