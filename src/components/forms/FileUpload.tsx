//@ts-nocheck
import { Input, FormControl, FormLabel, InputGroup, InputLeftElement, FormErrorMessage, Icon } from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";
import { useController } from "react-hook-form";
import { useRef } from "react";

export const FileUpload = ({ name, placeholder, acceptedFileTypes, control, children, isRequired = false }) => {
	const inputRef = useRef();
	const {
		field: { ref, onChange, value, ...inputProps },
		fieldState: { invalid, isTouched, isDirty },
	} = useController({
		name,
		control,
		rules: { required: isRequired },
	});

	return (
		<FormControl isInvalid={invalid}>
			<FormLabel htmlFor="writeUpFile">{children}</FormLabel>
			<InputGroup>
				<InputLeftElement
					pointerEvents="none">
					//@ts-ignore
					<Icon as={FiFile} />
				</InputLeftElement>
				//@ts-ignore
				<input type='file'
					   onChange={(e) => onChange(e.target.files[0])}
					   accept={acceptedFileTypes}
					   name={name}
					   ref={inputRef}
					   {...inputProps}
					   style={{display: 'none'}} />
				<Input
					bg={'gray.100'}
                        border={0}
                        color={'gray.500'}
                        _placeholder={{
                            color: 'gray.500',
                        }}
					placeholder={placeholder || "Your file ..."}
					//@ts-ignore
					onClick={() => inputRef.current.click()}
					readOnly={true}
					//@ts-ignore
					value={value && value.name || ''}
				/>
			</InputGroup>
			<FormErrorMessage>
				{invalid}
			</FormErrorMessage>
		</FormControl>
	);
}

FileUpload.defaultProps = {
	acceptedFileTypes: '',
	allowMultipleFiles: false,
};

export default FileUpload;