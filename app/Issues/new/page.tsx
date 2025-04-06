'use client'

import { TextField,TextArea, Button } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const page = () => {
    return (
        <div className='max-w-2xl mx-auto mt-10 space-y-3'>
            <TextField.Root placeholder="Search the docs…">
                <TextField.Slot>
                </TextField.Slot>
            </TextField.Root>
            <SimpleMDE placeholder="Reply to comment…" />
            <Button  className='w-full'>
                Create Issue
            </Button>
        </div>
    )
}

export default page
