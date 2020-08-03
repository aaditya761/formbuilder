import styles from "../styles/styles.js";

export default function insertButton(options, form) {

    let fieldGroup = document.createElement("DIV");
    fieldGroup.setAttribute("style", styles["form-group"]);

    let fieldItem = document.createElement("BUTTON");
    fieldItem.setAttribute("style", styles["button"]);
    fieldItem.innerHTML = options["label"];
    for(let key in options){
        if(options.hasOwnProperty(key)){
            fieldItem.setAttribute(key, options[key]);
            if(key=="type" && options[key]=="submit"){
                fieldItem.setAttribute("id", "form-builder-submit-button");
            }
        }
    }

    fieldGroup.appendChild(fieldItem);
    form.appendChild(fieldGroup);


    let validate = function (modelInfo, attrInfo) {
        return true;
    }
}