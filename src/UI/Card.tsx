const Card = (props: any) => {
    return (
        <div className="rounded-lg px-3 md:px-4 pr-4  md:pr-5  hover:bg-mutedcolor">
            {props.children}
        </div>
    );
};

export default Card;
