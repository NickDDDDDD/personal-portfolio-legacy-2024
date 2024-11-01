import PropTypes from "prop-types";

const ParallaxContainer = ({ children, backgroundColor = "#000000", className = "" }) => {
    return (
        <div
            className={`relative overflow-hidden h-screen w-full`}
            style={{ backgroundColor }}
        >
            <div
                className={`flex flex-col justify-center items-center absolute inset-0 gap-[10em] ${className}`}
            >
                {children}
            </div>
        </div>
    );
};

ParallaxContainer.propTypes = {
    children: PropTypes.node,
    backgroundColor: PropTypes.string,
    className: PropTypes.string,
};

export default ParallaxContainer;
