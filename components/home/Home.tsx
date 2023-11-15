import TableCard from "./TableCard";

import style from "./Home.module.scss";

interface Props {
  id: number;
  total: number;
  time: string;
}

function Home() {
  const virtualTable = require("../../storeData.json");
  return (
    <div>
      {virtualTable.map(({ id, total, time }: Props) => {
        <TableCard
          key={id}
          tableId={id}
          totalAmount={total}
          diningTime={time}
        />;
      })}
    </div>
  );
}

export default Home;
