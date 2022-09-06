import useSWR from "swr";

interface DataEntityResponse<T> {
    dataEntity?: DataPayload<T>;
    isLoading: boolean;
    error:
        | {
              message: string;
          }
        | undefined;
}

interface DataEntitiesResponse<T> {
    dataEntities: T[];
    isLoading: boolean;
    error:
        | {
              message: string;
          }
        | undefined;
}

interface DataPayload<T> {
    [key: string]: T;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const useGetSingleEntityById = <T,>(
    id: string | string[] | undefined,
    url: string
): DataEntityResponse<T> => {
    const { data, error } = useSWR<DataPayload<T>[]>(url, fetcher);

    let entity;

    if (data) {
        entity = data.find(item => item.id === id);
    }

    if (error) {
        error.message =
            "Oh no, something went wrong and we cannot access the information right now. Please try again later or try reloading the page.";
    }

    return {
        dataEntity: entity,
        isLoading: !error && !data,
        error,
    };
};

export const useGetEntities = <T,>(url: string): DataEntitiesResponse<T> => {
    const { data, error } = useSWR<T[]>(url, fetcher);

    if (error) {
        error.message =
            "Oh no, something went wrong and we cannot access the information right now. Please try again later or try reloading the page.";
    }

    return {
        dataEntities: data ? data : [],
        isLoading: !error && !data,
        error,
    };
};
