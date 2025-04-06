'use client'

import { TextField,TextArea, Button } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm,Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
    title: string;
    description: string;
} // This interface defines the structure of the form data
// that will be submitted when the form is submitted.

const page = () => {
    const router=useRouter() // This hook is used to programmatically navigate to different routes in the application.
    const {register,control,handleSubmit}=useForm<IssueForm>({
        defaultValues: {
            title: "",
            description: "",
        },
    }); // This initializes the form with default values for title and description.
    // The useForm hook from react-hook-form is used to manage the form state and validation.


    return (
        <form className='max-w-2xl mx-auto mt-10 space-y-3' 
        onSubmit={handleSubmit(async (data) =>{ 
            await axios.post("/api/issues",data);
            router.push("/issues") // This function is called when the form is submitted. It sends a POST request to the /api/issues endpoint with the form data.
            // After the request is successful, it redirects the user to the Issues page.
             })}>
            <TextField.Root placeholder="Search the docs…" {...register("title")}>
                <TextField.Slot>
                </TextField.Slot>
            </TextField.Root>
            <Controller // This component is used to control the SimpleMDE editor
                name="description"
                control={control}
                render={({field})=> <SimpleMDE placeholder="Reply to comment…"  {...field}/>} //
            />
            <Button  className='w-full'>
                Create Issue
            </Button>
        </form>
    )
}

export default page
