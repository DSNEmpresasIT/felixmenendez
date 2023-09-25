import React, { FC } from 'react'

interface ButtonPDFComponentProps {
  title: string;
  link: string;
  fileName: string;
}

export const ButtonPDFComponent:FC<ButtonPDFComponentProps> = ({ title, link, fileName }) => {
  // const handleDownloadPDF = () => {
  //   fetch(link).then(response => {
  //     response.blob().then(blob => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement('a');
  //       alink.href = fileURL;
  //       alink.download = 'file.pdf';
  //       alink.click();
  //     })
  //   })
  // }
  return (
    <a style={{ width: '100%' }} target='_blank' href={`${link}/${fileName}.pdf`}>
      <button 
        type="button" 
        style={{ 
          fontSize: '13px' 
        }}
      >
        {title}
      </button>
    </a>
  )
}
