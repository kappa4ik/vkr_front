import {FC} from "react";
import {useRouter} from "next/router";

const ParamsSearch : FC = () => {
  const router = useRouter();
  const { search } = router.query;

  return (
    <h1>
      {search}
    </h1>
  )
}

export default ParamsSearch;