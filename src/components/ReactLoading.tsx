import ReactLoading from "react-loading";

const ReactLoadingSpinner = ({ type, height, width, color, children }: any) => {
    return (
        <div className="text-center mt-4 flex-col flex space-y-4 items-center justify-center">
            <ReactLoading
                type={type}
                color={color}
                height={height}
                width={width}
            />

            {children}
        </div>
    );
};

export default ReactLoadingSpinner;
