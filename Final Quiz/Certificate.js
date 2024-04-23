function generateAndDownloadCertificate(name, percentage) {
  // var urlParams = new URLSearchParams(window.location.search);
  // const name = urlParams.get('name'); // Example name
  // const score = parseInt(urlParams.get('percentage')); // Example score
  if (percentage >= 80) {
    const certificateText = `
      <h3><b>${name}</b></h3>
      <p>This certifies that <b><strong>${name}</strong></b> has successfully earned the title of "Certified Potterhead"<br>through exemplary performance in the Wizardzworld Quiz. This distinction acknowledges profound knowledge and passion for the magical universe of Harry Potter. Moreover, the individual has achieved a score of <strong>${percentage}%</strong>.</p>
      <br><br><br><br>br><br><br><br><p>Awarded on ${new Date().toLocaleDateString()}</p>
        
    `;

    // Create a canvas element to draw the certificate
    const canvas = document.createElement('canvas');
    canvas.width = 3000; // Width of the certificate
    canvas.height = 2400; // Height of the certificate
    const ctx = canvas.getContext('2d');

    // Draw certificate background image
    const backgroundImage = new Image();
    backgroundImage.src = 'Resources/Certificate.jpg'; // Replace with your certificate image URL
    backgroundImage.onload = function () {
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

      // Parse certificate text and render it onto the canvas
      const container = document.createElement('div');
      container.innerHTML = certificateText;

      // Set default font size and other styles
      ctx.font = '40px Times New Roman'; // Adjust font family and size as needed
      ctx.fillStyle = 'black'; // Default text color
      ctx.textAlign = 'center'; // Default text alignment

      // Calculate the top position for the text
      let topPosition = 1100;
      for (const child of container.children) {
        const tagName = child.tagName.toLowerCase();
        let lineHeight = 100; // Default line height
        let textAlign = 'center'; // Default text alignment

        if (tagName === 'h3') {
          // Apply styles for headings
          ctx.font = 'bold 120px Times New Roman'; // Adjust font size and family for headings
          lineHeight = 120; // Adjust line height for headings
        } else if (tagName === 'p') {
          ctx.font = '100px Times New Roman'; // Adjust font size and family for paragraphs
          lineHeight = 80; // Adjust line height for paragraphs
          textAlign = 'justify'; // Set text alignment to justify for paragraphs
          // Apply different font sizes for paragraphs
          const paragraphClass = child.className; // Get the class name of the paragraph
          if (paragraphClass === 'award-date') {
            ctx.font = '100px Times New Roman'; // Adjust font size for the award date
          } else if (paragraphClass === 'second-para') {
            ctx.font = 'bold 50px Times New Roman'; // Adjust font size for the second paragraph
          } else {
            // Default font size for other paragraphs
            ctx.font = '60px Times New Roman'; // Adjust font size for other paragraphs
          }
        }

        // Split text into lines to fit within certificate width
        const textLines = splitTextIntoLines(child.innerText, canvas.width * 0.8, ctx.font);

        // Set text alignment
        ctx.textAlign = textAlign;

        // Render each line
        for (const line of textLines) {
          // Check if the line contains the name variable
          const lineToRender = line.includes('${name}') ? line.replace('${name}', name) : line;
          // Render in bold if it's the name variable or if it's in a paragraph with 'second-para' class
          if (line.includes('${name}') || child.className === 'second-para') {
            ctx.font = 'bold ' + ctx.font; // Set font weight to bold
            ctx.fillText(lineToRender, canvas.width / 2, topPosition);
            ctx.font = ctx.font.replace('bold ', ''); // Reset font weight
          } else {
            // Otherwise, print normally
            ctx.fillText(lineToRender, canvas.width / 2, topPosition);
          }
          topPosition += lineHeight; // Increment top position for next line
        }
      }



      // Convert canvas to data URL and initiate download
      const dataUrl = canvas.toDataURL('image/jpg');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'certificate.jpg';
      link.click();
    };

    // Function to split text into lines to fit within a given width
    function splitTextIntoLines(text, maxWidth, font) {
      const words = text.split(' ');
      const lines = [];
      let currentLine = words[0];

      ctx.font = font;
      for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = ctx.measureText(currentLine + ' ' + word).width;
        if (width < maxWidth) {
          currentLine += ' ' + word;
        } else {
          lines.push(currentLine);
          currentLine = word;
        }
      }
      lines.push(currentLine);
      return lines;
    }
  } 
  // else {
  //   alert('Score must be at least 80% to generate certificate.');
  // }
}

export { generateAndDownloadCertificate }

