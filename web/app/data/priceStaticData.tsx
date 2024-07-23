import {Option} from "@/app/ui/dropdown";

const API_URL = 'http://localhost:8080/api/'

export async function getStaticProps(resource: String) {
    const response = await fetch(`${API_URL}listings/cars/${resource}/`);
    const resources = await response.json();
    const options: Option[] = await resources.map((item: String) => ({
        value: item,
        label: item
    }))
    return {
        options,
      };
}