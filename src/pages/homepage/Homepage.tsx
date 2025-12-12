import {useNavigate} from "react-router";

const Homepage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>homepage</div>
            <button onClick={() => navigate('/maraphones')}>go to maraphones</button>
        </>

    )
}

export default Homepage;
