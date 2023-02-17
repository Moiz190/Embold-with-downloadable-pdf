window.onload = function () {
    document.getElementById('dl-pdf')
        .addEventListener("click", () => {
            let invoice = document.getElementById("invoice");
            let invoiceCopy = invoice.cloneNode(true);

            if (invoiceCopy.querySelector("#overview-heading-section")) {
                invoiceCopy.querySelector("#overview-heading-section").style.borderRadius = "0px";
            }
            const doc_width = 20;
            const doc_height = 11;
            const dpi = 100; 
            const img_width = doc_width * dpi;
            const img_height = doc_height * dpi -19;
            const win_width = img_width;
            const win_height = img_height;

            let html2canvasOpts = {
                scale: 1,
                width: img_width,
                height: img_height,
                windowWidth: win_width,
                windowHeight: win_height
            };
            let opt = {
                margin: 0.2,
                filename: 'myfile.pdf',
                image: { type: 'png', quality: 1 },
                html2canvas: html2canvasOpts,
                jsPDF: { unit: 'in', format: [doc_width, doc_height], orientation: 'landscape' }
            };

            html2pdf().from(invoiceCopy).set(opt).save();
        })
}
