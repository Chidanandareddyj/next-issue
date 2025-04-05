import { TextField,TextArea, Button } from '@radix-ui/themes'
import React from 'react'

const page = () => {
    return (
        <div className='max-w-2xl mx-auto mt-10 space-y-3'>
            <TextField.Root placeholder="Search the docs…">
                <TextField.Slot>
                </TextField.Slot>
            </TextField.Root>
            <TextArea placeholder="Reply to comment…" />
            <Button variant="primary" size="large" className='w-full'>
                Create Issue
            </Button>
        </div>
    )
}

export default page
