import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef, useMemo, useCallback } from 'react';
import axios from 'axios';
import ImageResize from 'quill-image-resize-module-react';

const Parchment = Quill.import('parchment');
Quill.register('modules/imageResize', ImageResize);

function Editor({ onChange, value }) {
  const quillRef = useRef();

  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post(
          '/admin/module/upload-image',
          formData,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        );

        const url = response.data.url;
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection(true);
        quill.insertEmbed(range.index, 'image', url);
        quill.setSelection(range.index + 1);
      } catch (error) {
        console.error('Image upload failed:', error);
      }
    };
  }, []);

  const modules = useMemo(
    () => ({
      imageResize: {
        parchment: Parchment,
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
      },
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ size: [] }],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['image', 'link'],
          [
            {
              color: [
                '#000000',
                '#e60000',
                '#ff9900',
                '#ffff00',
                '#008a00',
                '#0066cc',
                '#9933ff',
                '#ffffff',
                '#facccc',
                '#ffebcc',
                '#ffffcc',
                '#cce8cc',
                '#cce0f5',
                '#ebd6ff',
                '#bbbbbb',
                '#f06666',
                '#ffc266',
                '#ffff66',
                '#66b966',
                '#66a3e0',
                '#c285ff',
                '#888888',
                '#a10000',
                '#b26b00',
                '#b2b200',
                '#006100',
                '#0047b2',
                '#6b24b2',
                '#444444',
                '#5c0000',
                '#663d00',
                '#666600',
                '#003700',
                '#002966',
                '#3d1466',
              ],
            },
          ],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [imageHandler]
  );

  return (
    <ReactQuill
      theme="snow"
      value={value}
      modules={modules}
      onChange={onChange}
      ref={quillRef}
    />
  );
}

export default Editor;
