type Cache = "no-cache" | "reload" | "force-cache";
import cookies from "js-cookie";

const requestData = async <T>(url: string, caching: Cache) => {
    try {
        const token = cookies.get('token');

        const response = await fetch(url, {
            cache: caching,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            credentials: "include",
        });

        const data = await response.json();
        return data as T;
    }
    catch (error) {
        console.error("failed to fetch data", error);
    }
};

export default requestData;
