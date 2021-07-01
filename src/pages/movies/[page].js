import React from "react";
import Spinner from "../../components/Spinner/Spinner";

function Movies(props) {
	const router = useRouter();

	if (router.isFallback) {
		return (
			<div>
				<Spinner />
			</div>
		);
	}
	return <></>;
}

export default Movies;
