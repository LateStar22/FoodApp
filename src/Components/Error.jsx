import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Opps!!!</h1>
            <h2>We have got an error!!</h2>
        </div>
    );
};

export default Error;