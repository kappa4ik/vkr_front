import axios, {AxiosResponse} from "axios";
import {useEffect, useState} from "react";

export default function useVersion() : number {
    const [v, setV] = useState<number>(0);
    useEffect(() => {
        axios.get('http://localhost:8000/version/1',).
        then((response: AxiosResponse) => {
            const vv = response.data;
            setV(vv);
        });
    }, [setV]);
    return v;
}