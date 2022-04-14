import Link from 'next/link';

const StyledLink = ({ href, children }) => (
	<Link href={href}>
		<a className="shadow-highlight-initial hover:shadow-highlight transition-all duration-700 ease-in-out">
			{children}
		</a>
	</Link>
);

export default StyledLink;

/**
 * span.is--highlight_effect {
    box-shadow: inset 0 0px 0 0 rgb(26 187 169 / 10%);
    transition: box-shadow 1s ease;
    cursor: pointer;
}
span.is--highlight_effect:hover {
    box-shadow: inset 0 -36px 0 0 rgb(26 187 169 / 30%);
}
 */
