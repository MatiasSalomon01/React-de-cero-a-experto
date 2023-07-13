import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {

        setState({
            ...data,
            isLoading: true,
        });


        const res = await fetch(url);
        const content = await res.json();

        setState({
            data: content,
            isLoading: false,
            hasError: null
        });

        console.log(data);
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}

export default useFetch