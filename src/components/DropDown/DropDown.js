import React, { useEffect, useRef, useState } from "react";
import { Arrow } from "../../../public/icons/app/";
import styles from "./DropDown.module.scss";

function DropDown(props) {
	const { options, currentOption, render } = props;
	const [open, setOpen] = useState(false);
	const buttonRef = useRef(null);

	useEffect(() => {
		window.addEventListener("click", closeDropDown);
		return () => window.removeEventListener("click", closeDropDown);
	}, []);

	const toggleDropDown = (e) => {
		e.stopPropagation();
		setOpen(!open);
	};

	const closeDropDown = () => {
		setOpen(false);
	};

	return (
		<div className={styles.DropDown}>
			<button className={styles.DropDown__current} ref={buttonRef} onClick={toggleDropDown}>
				<span className={styles.DropDown__selected}>{currentOption}</span>
				<span className={styles.DropDown__arrow} style={{ transform: `rotate(${open ? "180" : "0"}deg)` }}>
					<Arrow />
				</span>
			</button>
			<div
				className={styles.DropDown__options}
				style={{ height: `${open ? buttonRef.current.offsetHeight * options.length : 0}px` }}>
				{/* pass the height of the current option button to the subsequent options, second parameter is the state of the drop down menu (open or not open) */}
				{render(buttonRef.current && buttonRef.current.offsetHeight, open)}
			</div>
		</div>
	);
}

export default DropDown;
