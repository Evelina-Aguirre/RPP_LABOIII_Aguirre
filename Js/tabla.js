export const crearTabla=(datos)=>{

    const tabla = document.createElement("table");
    const tHead=document.createElement("thead");
    const cabecera= document.createElement("tr");
   
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
    for (const key in datos[0]) {
        const th=document.createElement("th");
        th.textContent=key;
        cabecera.appendChild(th);
        if(key == "publicado")
        {
            const th1=document.createElement("th");
            th1.textContent="Enemigo";
            cabecera.appendChild(th1);
            const th2=document.createElement("th");
            th2.textContent="robos";
            cabecera.appendChild(th2);
            const th3=document.createElement("th");
            th3.textContent="Asesinatos";
            cabecera.appendChild(th3);
        }
        if(key == "asesinatos")
        {
            
            const th2=document.createElement("th");
            th2.textContent="ciudad";
            cabecera.appendChild(th2);
            const th3=document.createElement("th");
            th3.textContent="publicacion";
            cabecera.appendChild(th3);
        }
    }
    tHead.appendChild(cabecera);

    
    const tBody = document.createElement("tbody");
    datos.forEach(element => {
        const tr=document.createElement("tr");
        for (const key in element) {
            if (key === "id") {
                tr.setAttribute("data-id", element[key]);
            }
            if(key=="enemigo")
            {
                const td2=document.createElement("td");
                td2.textContent="---";
                tr.appendChild(td2);
                const td3=document.createElement("td");
                td3.textContent="---";
                tr.appendChild(td3);
                const td4=document.createElement("td");
                td4.textContent="---";
                tr.appendChild(td4);
    
            }
            const td = document.createElement("td");
            td.textContent=element[key];
            tr.appendChild(td);

            if(key=="publicado")
            {
                const td2=document.createElement("td");
                td2.textContent="---";
                tr.appendChild(td2);
                const td3=document.createElement("td");
                td3.textContent="---";
                tr.appendChild(td3);
                const td4=document.createElement("td");
                td4.textContent="---";
                tr.appendChild(td4);
    
            }
        }
        tBody.appendChild(tr);    
    });

    tabla.appendChild(tHead);
    tabla.appendChild(tBody);
    return tabla;
}




