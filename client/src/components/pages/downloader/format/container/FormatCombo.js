import { useState } from 'react';
import FormatItems from '../components/FormatItems'

const FormatCombo = ({setFormat, selectedFormat}) => {

	const [hiddenOptions, setHiddenOptions] = useState(true);
	//show format options
	const handleFormatDivClick = () => {
		var hidden = !hiddenOptions;
		setHiddenOptions(hidden);
	};

	return (
		<div className="relative text-left h-20" onClick={handleFormatDivClick}>
			<button type="button" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label" className="cursor-pointer h-16 relative w-full mt-2 bg-white border border-gray-300 rounded-l-lg shadow-sm pl-3 pr-10 text-left cursor-default focus:outline-none sm:text-sm">
				<span className="flex items-center">
					<span className="ml-3 block truncate">
						Format
						</span>
				</span>
				<span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
					<svg className="-mr-1 h-5 w-5 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
					</svg>
				</span>
			</button>
			<FormatItems hiddenOptions={hiddenOptions} setFormat={setFormat} selectedFormat={selectedFormat}/>
		</div>
	)
}

export default FormatCombo