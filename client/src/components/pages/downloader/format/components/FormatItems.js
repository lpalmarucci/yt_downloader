import React from 'react'
import FormatItem from './FormatItem';



const FormatItems = ({ hiddenOptions, formatType, setFormat, selectedFormat }) => {
	const formats = [
		"mp4",
		"mp3",
		"mkv"
	];

	const showOptions = (hiddenOptions) ? "hidden" : "";
	return (
		<div className={`absolute w-full rounded-b-md bg-white shadow-lg ${showOptions}`}>
			<ul tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" className="max-h-54 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
				{formats.map((format, idx) => {
					let spanClassNameSVG = "absolute inset-y-0 right-0 flex items-center pr-4"
					if (format != selectedFormat) {
						spanClassNameSVG += " hidden"
					}
					return <FormatItem key={idx} key_children={format} spanClassNameSVG={spanClassNameSVG} format={format} setFormatType={setFormat} />
				})}

			</ul>
		</div>
	)
}

export default FormatItems