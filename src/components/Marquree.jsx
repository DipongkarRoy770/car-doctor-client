

const Marquree = ({rev}) => {
    const { name, details, rating } = rev;

    return (
        <div className="gap-4">
            <div className="border-2 border-green-400 w-80 h-64 pt-5 px-4 ">
                <h2 className="text-center text-xl font-mono">{name}</h2>
                <p>{details}</p>
                <p className="text-center">{rating}</p>
            </div>
        </div>
    );
};

export default Marquree;
