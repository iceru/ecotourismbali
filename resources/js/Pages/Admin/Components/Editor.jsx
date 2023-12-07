import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef, useMemo } from 'react';

function Editor({ onChange, value }) {
  const quillRef = useRef();
  const modules = useMemo(
    () => ({
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
          image: function (value) {
            if (value) {
              document.querySelector('#imageUpload').click();
            } else {
              quillRef.format('image', false);
            }
          },
        },
      },
    }),
    []
  );

  const imageUpload = e => {
    if (e.target.files.length !== 0) {
      let quill = quillRef;
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      let self = this;
      reader.onloadend = function () {
        let base64data = reader.result;
        self.form.images.push(base64data);

        // Get cursor location
        let length = quill.getSelection().index;

        // Insert image at cursor location
        quill.insertEmbed(length, 'image', base64data);

        // Set cursor to the end
        quill.setSelection(length + 1);
      };
    }
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        modules={modules}
        onChange={onChange}
        ref={quillRef}
      />
      <div class="custom-file hidden">
        <input
          ref="image"
          oncHange={e => imageUpload(e)}
          type="file"
          class="custom-file-input"
          id="imageUpload"
          aria-describedby="imageUploadAddon"
        />
        <label class="custom-file-label" for="imageUpload">
          Choose file
        </label>
      </div>
    </>
  );
}

export default Editor;
