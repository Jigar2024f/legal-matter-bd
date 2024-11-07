"use client";
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), { 
  ssr: false, 
  loading: () => <p>Loading ...</p>,
});

const QuillEditor = ({ value, onChange }) => {
  return (
    <QuillNoSSRWrapper
      value={value}
      onChange={onChange}
      theme="snow"
      className='w-full h-40 mb-14'
    />
  );
};

export default QuillEditor;
