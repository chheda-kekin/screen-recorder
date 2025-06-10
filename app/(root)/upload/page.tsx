"use client"

import FileInput from "@/app/components/FileInput";
import FormField from "@/app/components/FormField";
import React, { ChangeEvent, useState } from "react";



const Page = () => {


    const [error, setError] = useState();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        visibility: 'public'
    })

    const handleInputChange = (e: ChangeEvent<any>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <div className="wrapper-md upload-page">
                <h1>Upload a video</h1>
                {error && <div className="error-field">{error}</div>}

                <form className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5">
                    <FormField
                        id="title"
                        type="text"
                        label="Title"
                        value={formData.title}
                        placeholder="Enter a clear & concise video title"
                        onChange={handleInputChange}
                        options={[]}
                    />
                    <FormField
                        id="description"
                        type="textarea"
                        label="Description"
                        value={formData.description}
                        placeholder="Briefly describe what this video is about"
                        onChange={handleInputChange}
                        options={[]} />
                    <FormField
                        id="visibility"
                        type="select"
                        label="Visibility"
                        value={formData.visibility}
                        placeholder="Select visibility (Public or Private)"
                        options={[{ value: "public", label: "Public" },
                             { label: "Private", value: "private" }]}
                        onChange={handleInputChange} />
                    <FileInput />
                </form>
            </div>
        </>
    );
}

export default Page;