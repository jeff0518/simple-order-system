import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Main from "@/components/main/Main";

import style from "./index.module.scss";

function HomePage() {
  const router = useRouter();

  const { data: session, status } = useSession();

  if (!session) {
    router.replace("/");
  }

  return (
    <div className={style.div}>
      <Main />
    </div>
  );
}

export default HomePage;
