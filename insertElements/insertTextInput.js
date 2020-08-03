import styles from "../styles/styles.js";

export default function insertTextInput(options, form) {

    let fieldGroup = document.createElement("DIV");
    fieldGroup.setAttribute("style", styles["form-group"]);
    let label = document.createElement("LABEL");
    label.setAttribute("style", styles["label"])

    if(options.hasOwnProperty("id")){
        label.setAttribute("for", options["id"]);
    }else {
        label.setAttribute("for", options["label"]);
    }
    label.innerText = options["label"];
    fieldGroup.appendChild(label)
    let fieldItem = document.createElement("INPUT");
    fieldItem.setAttribute("style", styles["text-input"]);
    if(!options.hasOwnProperty("id")){
        fieldItem.setAttribute("id", options["label"]);
    }
    for(let key in options){
        if(options.hasOwnProperty(key)){
            if(options[key]) {
                fieldItem.setAttribute(key, options[key]);
            }
        }
    }

    fieldGroup.appendChild(fieldItem);
    form.appendChild(fieldGroup);


    let validate = function (modelInfo, attrInfo) {
        return true;
    }
}