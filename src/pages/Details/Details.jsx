import { useLoaderData } from "react-router-dom";


const Details = () => {
    const details = useLoaderData();
    return (
        <div>
            <h1>This is Details.</h1>
        </div>
    );
};

export default Details;