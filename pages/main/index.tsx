// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
import useAuthCheck from "@/hooks/useAuthCheck";
import Main from "@/components/main/Main";
import Loading from "@/components/loading/Loading";

import style from "./index.module.scss";

function HomePage() {
  const authCheckComponent = useAuthCheck();

  if (authCheckComponent) {
    return <Loading />;
  }

  return (
    <div className={style.div}>
      <Main />
    </div>
  );
}

export default HomePage;
