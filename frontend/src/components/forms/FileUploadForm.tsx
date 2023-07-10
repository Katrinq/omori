//@ts-nocheck
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, FormControl, FormLabel, Input, Stack, Text} from "@chakra-ui/react";
import FileUpload from "./FileUpload";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {DataContextType} from "../../types";
import {DataContext} from "../../context";


interface IFormInput {
    voiceInterview: FileList
    name: string
    description: string
}

export const FileUploadForm = () => {
    const {
        handleSubmit,
        register,
        setError,
        control,
        formState: {errors, isSubmitting},
    } = useForm()
    const { saveData } = React.useContext(DataContext) as DataContextType;
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        setIsLoading(true)
        const formData = new FormData()
        formData.append("file", data.voiceInterview)
        formData.append("name", data.name)
        formData.append("description", data.description)
        axios.post("http://147.182.203.47:8000/api/create-project", formData, {
            "headers": {
                "Content-Type": "multipart/form-data"
            }
        }).then((resp) => { saveData(resp.data)
            navigate("/requirements")}).finally(() => {setIsLoading(false)})

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Stack spacing={4}>
                    <FormControl>
                        <FormLabel>
                            <Text color={'gray.500'} fontSize={{base: 'sm', sm: 'md'}}>
                                Let's create a project
                            </Text>
                        </FormLabel>
                        <Input
                            type="text"
                            placeholder="Enter a project name or product name"
                            bg={'gray.100'}
                            border={0}
                            color={'gray.500'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                            {...register("name")}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            <Text color={'gray.500'} fontSize={{base: 'sm', sm: 'md'}}>
                                Provide more details
                            </Text>
                        </FormLabel>
                        <Input
                            type="text"
                            placeholder="What is it, and what does it do?"
                            bg={'gray.100'}
                            border={0}
                            color={'gray.500'}
                            _placeholder={{
                                color: 'gray.500',
                            }}
                            {...register("description")}
                        />
                    </FormControl>
                    <FileUpload name="voiceInterview"
                                acceptedFileTypes=".mp3"
                                isRequired={false}
                                placeholder=" Voice Interview with Customer journey description"
                                control={control}>
                        <Text color={'gray.500'} fontSize={{base: 'sm', sm: 'md'}}>
                            Provide User Interview file
                        </Text>

                    </FileUpload>
                    <Button fontFamily={'heading'}
                           mt={8}
                           w={'full'}
                           bgGradient="linear(to-r, red.400,pink.400)"
                           color={'white'}
                           _hover={{
                               bgGradient: 'linear(to-r, red.400,pink.400)',
                               boxShadow: 'xl',
                           }} type="submit"
                           isLoading={isLoading}>
                        Submit
                    </Button>
                </Stack>


            </form>

        </>)
}


