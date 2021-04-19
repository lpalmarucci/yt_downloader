import React from 'react'

const FormatItem = ({key_children, format, spanClassNameSVG, setFormatType }) => {

	const handleFormatTypeClick = (selectedFormat) => {
		setFormatType(selectedFormat);
	};

	return (
		<li key={key_children} role="option" className="cursor-pointer text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9" onClick={() => handleFormatTypeClick(format)}>
			<div className="flex items-center">
				<span className="ml-3 block font-normal truncate">
					{format}
				</span>
			</div>
			<span className={spanClassNameSVG}>
				<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
				</svg>
			</span>
		</li>
	)
}

export default FormatItem