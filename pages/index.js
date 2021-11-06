import Todo from "../components/Todo";
import axios from "axios";
import {httpClient} from "../helper/httpClient";

export default function Home({todoList}) {
    return <><Todo todoList={todoList}/></>;
}

export async function getStaticProps() {
    const res = await axios.get(httpClient + '/todos');
    const data = await res.data;
    console.log(data);

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            todoList: data
        },
    }
}
