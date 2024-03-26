import { useEffect, useState } from "react";
import { storage } from "shared/services/firebase/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { message } from "antd";

export interface IUseGetFileURLReturn {
    url: string,
    isLoading: boolean
}

export const useGetFileURL = (folder: string, fileName: string ): IUseGetFileURLReturn => {
    const [url, setUrl] = useState<string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fileRef = ref(storage, `${folder}/${fileName}`)

    useEffect(() => {
        setIsLoading(true);
        getDownloadURL(fileRef).then(function(url) {
            setUrl(url);
            setIsLoading(false);
        }).catch(function(error) {
            setIsLoading(false);
            message.error(`${error}`);
        });
    }, [fileName])

    return {url, isLoading}
}