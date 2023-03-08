import {FC} from "react";
import {useRouter} from "next/router";

const ParamsId : FC = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <h1>
            {id == undefined ? 'This my page!' : `This ${id}'s page!`}
        </h1>
    )
}

export default ParamsId;