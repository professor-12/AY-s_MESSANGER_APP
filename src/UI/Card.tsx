const Card = (props: any) => {
    return (
        <div className="rounded-lg px-4 pr-5 p-2 hover:bg-mutedcolor">
            {props.children}
        </div>
    );
};

export default Card;
