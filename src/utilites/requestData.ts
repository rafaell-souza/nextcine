type Cache = "no-cache" | "reload" | "force-cache";

const requestData = async <T>(url: string, caching: Cache) => {
    try {
        const response = await fetch(url, { cache: caching });
        const data = await response.json();
        return data as T;
    }
    catch (error) {
        console.error(error);
    }
};

export default requestData;
