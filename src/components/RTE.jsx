import React,{useRef} from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

export default function RTE({name, control, label, defaultValue=""}) {
    // console.log("rte")
    
    const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

        <Controller
        name={name || "content"}
        control={control}
        render={({field:{onChange}})=>(
            <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            
            apiKey='lni9hdtm4ouigcu6yqlve5vsmkih2a58m68m6sofd1wd5zrv'
            initialValue={defaultValue}
            init={
                {   
                    readonly: false,
                    initialValue: defaultValue,
                    branding:false,
                    height:500,
                    menubar:true,
                    plugins: [
                        'advlist','lists','image','charmap','preview','anchor','searchreplace','visualblocks','code','fullscreen','insertdatetime','media','table','help','wordcount'
                    ],
                toolbar:'undo redo | blocks | image | formatselect | bold italic forecolor | \
                alignleft aligncenter aligenright alignjustify | \
                bullist numlist outdent indent | removeformat | help',
                content_style:"body { font-fmily:Helvetica,Arial,sans-serif; font-size:14px }",

                               
                }
            }
            onEditorChange={onChange}
            />
        )}
        />
    </div>
    
  )
}

