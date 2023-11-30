/* eslint-disable react/prop-types */

const NavLink = ({ href, text }) => {

    return (
        <a className="text-white hover:text-orange-600 text-lg uppercase font-semibold"
            href={href}
        >
            {text}
        </a>
    );
};

export default NavLink;