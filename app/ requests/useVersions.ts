import {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import Version from "@/interface/serverData";

export default function useVersions() : number[] {
    const [vv, setVv] = useState<number[]>([]);
    useEffect(() => {
        axios.get('http://localhost:8000/version',).
        then((response: AxiosResponse) => {
            const vs: Version = response.data;
            setVv(vs.version);
        });
    }, [setVv]);
    return vv;
}