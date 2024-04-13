function initTitle() {
   class Title extends HTMLElement {
      constructor() {
         super();
      }
      shadow = this.attachShadow({ mode: "open" });
      connectedCallback() {
         if (this.isConnected) {
            const div = document.createElement("div");
            const content = document.createElement("h1");
            const style = document.createElement("style");

            content.innerHTML = this.textContent || "Un titulo";

            style.textContent = `
                h1{
                color: #009048;
                font-size:80px;
                margin: 0;
               }
             
               h1>span.ligth{
                  color: #91CCAF;
                  
                }
                border:1px solid black;
                `;
            div.append(content);
            this.shadow.append(div, style);
         }
      }
   }

   customElements.define("title-comp", Title);
}
export { initTitle };
