document.addEventListener("DOMContentLoaded", function() {
    const btnCargar = document.getElementById("btnCargar");
    const tabla = document.getElementById("tablaCDs");

    btnCargar.addEventListener("click", async function() {
        await loadXMLDoc();
    });

    const loadXMLDoc = async () => {
        try {
            const response = await fetch('cd_catalog.xml');
            const text = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, "application/xml");
            const cds = xmlDoc.getElementsByTagName("CD");
            mostrarTabla(cds);
        } catch (error) {
            console.error('Error loading XML:', error);
        }
    };

    const mostrarTabla = (cds) => {           
        let tableContent = "<tr><th>Artist</th><th>Title</th></tr>";
        Array.from(cds).forEach(cd => {
            const artist = cd.getElementsByTagName("ARTIST")[0]?.textContent || "N/A";
            const title = cd.getElementsByTagName("TITLE")[0]?.textContent || "N/A";
            tableContent += `<tr><td>${artist}</td><td>${title}</td></tr>`;
        });
        tabla.innerHTML = tableContent;
    };
});